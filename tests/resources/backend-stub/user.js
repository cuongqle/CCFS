const express = require('express');
const router = express.Router();

router.post('/api/authenticate', (req, res) => {
  res.status(200).json({
    token: '1xcvtxnmjdlskjdlk'
  });
});

router.post('/api/users', (req, res) => {
  res.status(200).json({});
});

module.exports = router;
