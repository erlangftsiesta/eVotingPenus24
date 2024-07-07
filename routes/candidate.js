const express = require('express');
const router = express.Router();
const candidateController = require('../controller/candidate');

router.get('/', candidateController.getAllCandidates);

module.exports = router;
