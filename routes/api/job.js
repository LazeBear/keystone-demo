var keystone = require('keystone');

var Job = keystone.list('Job');

exports.list = function(req, res) {
	Job.model.find(function(err, items) {
		if (err) return res.json({ err: err });

		res.json({
			Job: items
		});
	});
};

exports.get = function(req, res) {
	Job.model
		.findById(req.params.id)
		.populate('city')
		.exec(function(err, item) {
			if (err) return res.json({ err: err });
			if (!item) return res.json('not found');

			res.json({
				job: item
			});
		});
};
