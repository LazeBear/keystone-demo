var keystone = require('keystone');
var Types = keystone.Field.Types;

var Job = new keystone.List('Job', {
	autokey: { path: 'slug', from: 'name', unique: true },
	map: { name: 'name' }
});

Job.add({
	name: { type: String, required: true },
	city: { type: Types.Relationship, ref: 'City' }
});

Job.register();
