module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),
		jshint: {

			all: ["src/*.js", "test/*.js"]
		},
		jscs: {

			src: ["src/*.js", "test/*.js"],
			options: {

				config: ".jscsrc",
 				esnext: false,
				verbose: true,
				fix: false
			}
		},
		nodeunit: {
			all: ['test/*.js']
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-jscs");
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask("default", ["jshint", "jscs", "nodeunit"]);
};
