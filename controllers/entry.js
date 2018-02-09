var moment = require('moment');

var Entry = require('../models/entry');

module.exports = {
	getAll: (req, res) => {
		Entry.find().exec(function (err, allEntries) {
			if(err) throw err
			allEntries.reverse()	// Sort by newest date
			res.render('index', { title: 'Express Guestbook', allEntries, moment })
		});
	},

	getById: (req, res) => {
		Entry.findOne({_id:req.params.id}).exec(function (err, entry) {
			if(err) throw err
			res.send(entry)
		});
	},

	createEntry: (req, res) => {
		var entryData = req.body
		Entry.create(entryData, function(err, entry){
			if(err) throw err
			console.log('New entry added')
			res.redirect('/')
		});
	}
}
