const AWS = require('aws-sdk');
const s3 = new AWS.S3();

class MetadataService {
  constructor() {
    this.s3 = new AWS.S3();
    this.bucketName = process.env.S3_BUCKET_NAME;
    this.metadataCache = new Map();
    this.lastCacheUpdate = null;
  }

  async getAllDatasetMetadata() {
    try {
      // List all dataset folders
      const datasets = await this.s3.listObjectsV2({
        Bucket: this.bucketName,
        Delimiter: '/',
        Prefix: 'datasets/'
      }).promise();

      const metadataPromises = datasets.CommonPrefixes.map(async (prefix) => {
        const datasetName = prefix.Prefix.split('/')[1];
        return this.getDatasetMetadata(datasetName);
      });

      return await Promise.all(metadataPromises);
    } catch (error) {
      console.error('Error fetching metadata:', error);
      throw error;
    }
  }

  async getDatasetMetadata(datasetName) {
    try {
      const metadataKey = `datasets/${datasetName}/metadata.json`;
      
      const metadata = await this.s3.getObject({
        Bucket: this.bucketName,
        Key: metadataKey
      }).promise();

      return JSON.parse(metadata.Body.toString());
    } catch (error) {
      console.error(`Error fetching metadata for ${datasetName}:`, error);
      throw error;
    }
  }

  // Cache metadata for better performance
  async getCachedMetadata() {
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

    if (
      !this.lastCacheUpdate || 
      Date.now() - this.lastCacheUpdate > CACHE_DURATION
    ) {
      const metadata = await this.getAllDatasetMetadata();
      this.metadataCache.clear();
      metadata.forEach(m => this.metadataCache.set(m.id, m));
      this.lastCacheUpdate = Date.now();
    }

    return Array.from(this.metadataCache.values());
  }
}

module.exports = new MetadataService();