var keystone = require('keystone');

var University = keystone.list('University');

exports.list = function(req, res) {
	University.model.find(function(err, items) {
		if (err) return res.json({ err: err });

		res.json({
			University: items
		});
	});
};

exports.get = function(req, res) {
	console.log('hello');
	University.model
		.findById(req.params.id)
		.populate('city')
		.exec(function(err, item) {
			if (err) return res.json({ err: err });
			if (!item) return res.json('not found');

			res.json({
				University: item
			});
		});
};
