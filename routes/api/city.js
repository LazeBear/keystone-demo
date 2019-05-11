var keystone = require('keystone');

var City = keystone.list('City');

exports.list = function(req, res) {
	City.model.find(function(err, items) {
		if (err) return res.json({ err: err });

		res.json({
			City: items
		});
	});
};

exports.get = function(req, res) {
	console.log('hello');
	City.model
		.findById(req.params.id)
		.populate('job city')
		.exec(function(err, item) {
			if (err) return res.json({ err: err });
			if (!item) return res.json('not found');

			res.json({
				city: item
			});
		});
};
