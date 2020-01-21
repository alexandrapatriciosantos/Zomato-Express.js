const express = require('express');
const { getAllDocumentation } = require('../controllers/documentation-controller');


const router = express.Router();

router.get('/', getAllDocumentation);

router.get('/:title', (req, res) => {
  res.send('documentation - title, e.g. documentation/health');
});

module.exports = router;
