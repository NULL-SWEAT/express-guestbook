var express = require('express');
var router = express.Router();

var entryController = require('../controllers/entry');

router.get('/', (req, res, next) => {
  res.render('new-entry', { title: 'New Entry'})
});

router.post('/', entryController.createEntry);

module.exports = router;
