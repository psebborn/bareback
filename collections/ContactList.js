var ContactList = Backbone.Collection.extend({
	// Define what model this collection relates to
	model : Contact,
	// The url property is what's called when the fetch method is run
	url : 'data.json'
});