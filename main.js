require.config({
	paths: {
		backbone: 'node_modules/backbone/backbone-min',
		underscore: 'node_modules/underscore/underscore-min',
		text: 'lib/text'
	},
	shim: {
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps: ['underscore'],
			exports: 'Backbone'
		},
		'app' : {
			// deps: ['backbone']
		}
	}
});

require(['app','underscore', 'backbone'], function(App, _, Backbone) {
	window.app = new App();
})