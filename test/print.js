exports.testPrintingFunction = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../test/modules/print/module");

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/print.js", "utf-8", function(error, data) {

		console.log(error);

		test.strictEqual(output, data);
		test.done();
	});
};
