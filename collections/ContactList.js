define(['models/Contact'], function(Contact) {
	var ContactList = Backbone.Collection.extend({
		// Define what model this collection relates to
		model : Contact,
		// The url property is what's called when the fetch method is run
		url :'/bareback/data.json'
	});

	return ContactList;
});