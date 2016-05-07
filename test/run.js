exports.testPrintingFunction = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/print");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/print.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPrintingTwoFunctions = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/two");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/two.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testOneFunctionDependingOnAnother = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/depend");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/depend.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};
