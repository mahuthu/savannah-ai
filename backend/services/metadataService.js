const { S3Client, ListObjectsV2Command, GetObjectCommand } = require('@aws-sdk/client-s3');

class MetadataService {
  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      }
    });
    this.bucketName = process.env.S3_BUCKET_NAME;
    this.metadataCache = new Map();
    this.lastCacheUpdate = null;
  }

  async getAllDatasetMetadata() {
    try {
      const command = new ListObjectsV2Command({
        Bucket: this.bucketName,
        Delimiter: '/',
        Prefix: 'datasets/'
      });

      const response = await this.s3Client.send(command);
      
      if (!response.CommonPrefixes) {
        console.log('No datasets found in bucket');
        return [];
      }

      const metadataPromises = response.CommonPrefixes.map(async (prefix) => {
        try {
          const datasetName = prefix.Prefix.split('/')[1];
          return await this.getDatasetMetadata(datasetName);
        } catch (error) {
          console.error(`Error fetching metadata for dataset ${prefix.Prefix}:`, error);
          return null;
        }
      });

      const results = await Promise.all(metadataPromises);
      return results.filter(result => result !== null);
    } catch (error) {
      console.error('Error fetching metadata:', error);
      throw error;
    }
  }

  async getDatasetMetadata(datasetName) {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucketName,
        Key: `datasets/${datasetName}/metadata.json`
      });

      const response = await this.s3Client.send(command);
      const metadata = await response.Body.transformToString();
      
      try {
        return JSON.parse(metadata);
      } catch (parseError) {
        console.error(`JSON Parse error for ${datasetName}:`, metadata);
        throw parseError;
      }
    } catch (error) {
      console.error(`Error fetching metadata for ${datasetName}:`, error);
      throw error;
    }
  }

  async getCachedMetadata() {
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

    try {
      if (
        !this.lastCacheUpdate || 
        Date.now() - this.lastCacheUpdate > CACHE_DURATION
      ) {
        const metadata = await this.getAllDatasetMetadata();
        this.metadataCache.clear();
        metadata.forEach(m => m && m.id && this.metadataCache.set(m.id, m));
        this.lastCacheUpdate = Date.now();
      }

      return Array.from(this.metadataCache.values());
    } catch (error) {
      console.error('Cache refresh error:', error);
      // Return existing cache if available, otherwise empty array
      return this.metadataCache.size > 0 
        ? Array.from(this.metadataCache.values())
        : [];
    }
  }
}

module.exports = new MetadataService();