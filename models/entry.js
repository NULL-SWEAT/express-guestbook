var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
    text: { type: String, required: true, max: 100 },
    author: { type: String, required: true, max: 20},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', entrySchema);
