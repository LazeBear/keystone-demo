var keystone = require('keystone');
var Types = keystone.Field.Types;

var City = new keystone.List('City', {
	autokey: { path: 'slug', from: 'name', unique: true },
	map: { name: 'name' }
});

City.add({
	name: { type: String, required: true },
	university: { type: Types.Relationship, ref: 'University' },
	job: { type: Types.Relationship, ref: 'Job', many: true }
});

City.register();
