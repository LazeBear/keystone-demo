var keystone = require('keystone');
var Types = keystone.Field.Types;

var University = new keystone.List('University', {
	autokey: { path: 'slug', from: 'name', unique: true },
	map: { name: 'name' }
});

University.add({
	name: { type: String, required: true },
	city: { type: Types.Relationship, ref: 'City' }
});

University.register();
