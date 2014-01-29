var ContactListView = Backbone.View.extend({
	// There's an empty div in index.html for the contact list. The el property here specifies where we're hooking into.
	el: 'div.contact-list',
	initialize: function() {},

	render: function() {
		// Loop over the models in the collection, and render each one
		_.each(this.collection.models, function(item) {
			this.renderItem(item);
		}, this);
	},

	renderItem: function(model) {
		// Create a new instance of the list item view
		var contact = new ContactListItem({model: model});
		//Add it to the page
		this.$el.append(contact.render().el);
	}

});