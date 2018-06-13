const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/api/templates', (req, res) => {
  res.status(200).json(require("../resp/template-list.json"));
});

router.get('/api/template/html/:type', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/sample.html'));
});

module.exports = router;
