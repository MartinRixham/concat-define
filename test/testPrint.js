exports.testPrintingFunction = function(test) {

	var concat = require("../src/concat-define");

	var output = concat("../modules/module");

	test.strictEqual(output, "function () { var hello = \"Hello world.\"; }");
	test.done();
};
