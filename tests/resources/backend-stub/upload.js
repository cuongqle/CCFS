const express = require('express');
const router = express.Router();
const multer = require('multer');
const dest = __dirname + '/uploads/';
const uploading = multer({ dest: dest });

router.post('/api/upload/logo', uploading.single('logo'), (req, res) => {
  res.status(200).json({ url: req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename });
});

module.exports = router;
