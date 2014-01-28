var AddressBookApp = function() {
	// define some structure for the app, e.g. controllers, models, views, templates
	this.models = {
		contact: new Contact
	};
	this.collections = {
		contacts: new ContactList()
	};
	this.views = {
		contactlist: new ContactListView()
	};
	this.templates = {};

	this.collections.contacts.fetch();
};


var ab = new AddressBookApp();