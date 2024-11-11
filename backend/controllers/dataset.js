const metadataService = require('../services/metadataService');

exports.getDatasets = async (req, res) => {
  try {
    const { 
      type, 
      language, 
      useCase, 
      units, 
      search 
    } = req.query;

    let datasets = await metadataService.getCachedMetadata();

    // Apply filters
    if (search) {
      datasets = datasets.filter(dataset => 
        dataset.title.toLowerCase().includes(search.toLowerCase()) ||
        dataset.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (type) {
      datasets = datasets.filter(dataset => 
        dataset.type.toLowerCase() === type.toLowerCase()
      );
    }

    if (language) {
      datasets = datasets.filter(dataset => 
        dataset.languages.some(lang => 
          lang.toLowerCase() === language.toLowerCase()
        )
      );
    }

    if (useCase) {
      datasets = datasets.filter(dataset => 
        dataset.useCases.some(uc => 
          uc.toLowerCase() === useCase.toLowerCase()
        )
      );
    }

    if (units) {
      datasets = datasets.filter(dataset => 
        dataset.units.toLowerCase() === units.toLowerCase()
      );
    }

    res.json(datasets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching datasets' });
  }
};

exports.getDatasetDetails = async (req, res) => {
  try {
    const { datasetId } = req.params;
    const metadata = await metadataService.getDatasetMetadata(datasetId);
    res.json(metadata);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching dataset details' });
  }
};