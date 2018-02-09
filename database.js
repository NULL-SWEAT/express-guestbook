var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/expressguestbook');

var db = mongoose.connection;

db.on('error', err => {
    console.log('Error connecting to database', err);
});

db.once('open', () => {
    console.log('Connected to database');
});

process.on('SIGINT', () => {
    db.close(() => {
      console.log('App terminated, connection closed');
      process.exit(0);
    });
});

module.exports = db;