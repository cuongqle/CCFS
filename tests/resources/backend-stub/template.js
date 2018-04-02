const express = require('express');
const router = express.Router();

router.get('/api/templates', (req, res) => {
  res.status(200).json(require("../resp/template-list.json"));
});

module.exports = router;
