/**
  * ContactListItem is a view to display an individual contact model
  */
 define(['text!templates/ContactItem.html'], function( template) {
	var ContactListItem = Backbone.View.extend({
		//If we use tagName and / or className here, we create a new element for the view
		//If we use 'el', then it attaches to an existing element (see ContactListView)
		className : 'contact-item col-md-4',
		tagName: 'article',
		initialize: function() {
			//Grab the template from the HTML, and convert it to an Underscore template
			this.template = _.template(template);
		},
		render: function() {
			//Grab the data from the model, and convert it to JSON so the template can use it
			var data = this.model.toJSON();
			//Render the template against the data, and add it to the element's html
			this.$el.html(this.template(data));

			return this;
		}
	});
	return ContactListItem;
});