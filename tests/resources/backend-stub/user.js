const express = require('express');
const router = express.Router();

router.post('/api/authenticate', (req, res) => {
  res.status(200).json({
    token: '1xcvtxnmjdlskjdlk'
  });
});

module.exports = router;
