'use strict';
const express = require('express');
const multer = require('multer');

var router = express.Router();

// Get file upload and return JSON containing only the size of the file.
router.post('/get-file-size', multer({dest: 'uploads/'}).single('file'), function (req, res){
  if (req.file) res.send({size: req.file.size});
});

module.exports = router;