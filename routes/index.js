var express = require('express');
var router = express.Router();

var entryController = require('../controllers/entry');

router.get('/', entryController.getAll);

module.exports = router;
