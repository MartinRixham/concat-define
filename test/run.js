exports.testPrintingModule = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/print");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/print.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPrintingTwoModules = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/two");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/two.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testOneModuleDependingOnAnother = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/depend");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/depend.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.moduleWithTwoDependencies = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/dependTwice");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/dependTwice.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.dependencyChain = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/chain");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/chain.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.dependOnPublicModule = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/dependPublic");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/dependPublic.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};
