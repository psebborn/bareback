module.exports = function(grunt) {
	grunt.initConfig({
		// Any info in the package.json, e.g. name, version etc can be accessed
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					baseUrl: '.',
					//name is the base bootstrap package we're having
					name: 'main',
					//out is where it's built to
					out: 'build/script.js',
					// Any dependencies need their paths redeclaring here if it's not in the app root
					paths: {
						'text' : 'lib/text',
						backbone: 'node_modules/backbone/backbone-min',
						underscore: 'node_modules/underscore/underscore-min'
					}
				}
			}
		},
		watch: {
			scripts: {
				//Watch all JS files except those in node_modules and build
				files: ['**/*.js', '!node_modules/**/*.js', '!build/*.js'],
				//run the requirejs:compile task
				tasks: ['requirejs:compile']
			},
			less: {
				files: ['less/**/*.less'],
				tasks: ['less:compile']
			}
		},
		less: {
			dev: {
				options: {
					paths: ['less'],
					sourceMap: true
				},
				files: {
				 'build/css/bootstrap.css' : 'less/bootstrap/bootstrap.less',
				 'build/css/bareback.css' : 'less/bareback.less'
				},
			},
			compile: {
				options: {
					paths: ['less'],
					compress: true
				},
				files: {
				 'build/css/bootstrap.css' : 'less/bootstrap/bootstrap.less',
				 'build/css/bareback.css' : 'less/bareback.less'
				},
			}
		}
	});

	// Load all the plugins we need
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-requirejs')
	grunt.loadNpmTasks('grunt-contrib-less')
	// Define some tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['requirejs:compile', 'less:compile']);
	// grunt.registerTask('default', ['requirejs:compile']);
}