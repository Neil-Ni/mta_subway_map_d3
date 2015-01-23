/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		api: {
			files: ['api/**/*'],
			options: {
				livereload: true
			}
		},
		views: {
			files: ['views/**/*.ejs'],
			options: {
				livereload: true
			}
		},
		assets: {
			files: ['assets/js/dependencies/angular.js', 'assets/js/dependencies/**/*.js', 'assets/**/**/**/**/*', 'tasks/pipeline.js'],
			tasks: ['syncAssets' , 'linkAssets'],
			options: {
				livereload: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
