var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	// Views
	app.get('/', routes.views.index);

	app.get('/api/jobs', routes.api.job.list);
	app.get('/api/jobs/:id', routes.api.job.get);

	app.get('/api/universities', routes.api.university.list);
	app.get('/api/universities/:id', routes.api.university.get);

	app.get('/api/cities', routes.api.city.list);
	app.get('/api/cities/:id', routes.api.city.get);
};
