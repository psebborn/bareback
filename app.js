var AddressBookApp = function() {
	// define some structure for the app, e.g. controllers, models, views, templates

	// Create a new instance of the ContactList collection
	//... and one for the list view
	var contacts = new ContactList(),
		contactlist = new ContactListView({
			collection: contacts
		});

	//Fetch the contact list (currently stored in data.json)
	contacts.fetch({
		success: function() {
			// When we have data, render it
			contactlist.render();
		}
	});

	return {
		contacts    : contacts,
		contactlist : contactlist
	};
};


var ab = new AddressBookApp();