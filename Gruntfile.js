module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-eslint");
	grunt.loadNpmTasks("grunt-contrib-nodeunit");

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),
		eslint: {
			target: ["src/**", "test/*.js"]
		},
		nodeunit: {

			all: ["test/*.js"]
		}
	});

	grunt.registerTask("default", ["eslint", "nodeunit"]);
};
