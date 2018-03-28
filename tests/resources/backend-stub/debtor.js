const express = require('express');
const router = express.Router();

router.get('/api/debtors', (req, res) => {
  res.status(200).json(require("../resp/debtors.json"));
});

router.get('/api/debtor/:id', (req, res) => {
  res.status(200).json(require("../resp/debtor-details.json"));
});

module.exports = router;
