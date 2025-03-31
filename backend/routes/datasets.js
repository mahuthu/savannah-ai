const express = require('express');
const router = express.Router();
const { getDatasets, getDatasetDetails } = require('../controllers/dataset');

router.get('/', getDatasets);
router.get('/:datasetId', getDatasetDetails);

module.exports = router;