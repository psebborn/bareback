// The define call allows you to declare dependencies which will be managed by requirejs 
define(['collections/ContactList', 'views/ContactListView'], function(ContactList, ContactListView) {
	var AddressBookApp = function() {
		// define some structure for the app, e.g. controllers, models, views, templates

		// Create a new instance of the ContactList collection
		//... and one for the list view
		var contacts = new ContactList(),
			contactlist = new ContactListView({
				collection: contacts
			});

		// Fetch the contact list (currently stored in data.json)
		contacts.fetch({
			success: function() {
				// When we have data, render it
				contactlist.render();
			}
		});

		// Expose anything we need
		contacts.fetch();
		this.contacts = contacts;
		this.contactlist = contactlist;
	};

	// Make sure to return everything that's declared, otherwise other modules won't be able to access them
	return AddressBookApp;

});
