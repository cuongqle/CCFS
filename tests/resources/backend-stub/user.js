const express = require('express');
const router = express.Router();

router.post('/api/authenticate', (req, res) => {
  res.status(200).json({
    token: '1xcvtxnmjdlskjdlk'
  });
});

router.post('/api/user', (req, res) => {
  res.status(200).json({});
});

router.get('/api/user', (req, res) => {
  res.status(200).json(require("../resp/logged-user.json"));
});

module.exports = router;
