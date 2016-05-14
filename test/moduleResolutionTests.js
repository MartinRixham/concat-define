exports.tearDown = function(callback) {

	for (var key in require.cache) {

		delete require.cache[key];
	}

	callback();
};

exports.testPrintingTwoModules = function(test) {

	var concat = require("../src/concat-define");

	var modules =
		[
			"../test/modules/circular/One",
			"../test/modules/circular/Two"
		];

	var errorMessage;

	try {

		concat(modules);
	}
	catch (error) {

		errorMessage = error.message;
	}
	finally {

		test.strictEqual(errorMessage, "One and Two are vertices on a dependency cycle.");
		test.done();
	}
};

exports.testMissingModule = function(test) {

	var concat = require("../src/concat-define");

	var errorMessage;

	try {

		concat(["../test/modules/missing/One"]);
	}
	catch (error) {

		errorMessage = error.message;
	}
	finally {

		test.strictEqual(errorMessage, "Could not find module thingy.");
		test.done();
	}
};
