/** Contact.js
 * A model that represents one piece of data, i.e. one DB row or a JSON object
 */
 define(function() {
	var Contact = Backbone.Model.extend({
		defaults: {
			'img' : 'http://placekitten.com/250/250'
		},
		initialize: function() {},
		render: function() {}
	});

	return Contact;
})