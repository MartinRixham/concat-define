exports.tearDown = function(callback) {

	for (var key in require.cache) {

		delete require.cache[key];
	}

	callback();
};

exports.testPrintingTwoModules = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["One", "Two"];
	var errorMessage;

	try {

		concat("../test/modules/circular", modules, {});
	}
	catch (error) {

		errorMessage = error.message;
	}

	test.strictEqual(errorMessage, "One and Two are vertices on a dependency cycle.");
	test.done();
};

exports.testMissingModule = function(test) {

	var concat = require("../src/concat-define");
	var errorMessage;

	try {

		concat("../test/modules/missing", ["One"], {});
	}
	catch (error) {

		errorMessage = error.message;
	}

	test.strictEqual(errorMessage, "Could not find module thingy.");
	test.done();
};

exports.testModuleInWrongDirectory = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["public", "internal"];
	var errorMessage;

	try {

		concat("../test/modules/wrongDirectory", modules, {});
	}
	catch (error) {

		errorMessage = error.message;
	}

	test.strictEqual(errorMessage, "Could not find module ../internal.");
	test.done();
};

exports.testModuleInSubdirectory = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["sub/internal", "public", "sub/sub/internal"];
	var output = concat("../test/modules/subdirectory", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/subdirectory.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPrintingModuleWithExternalDependency = function(test) {

	var concat = require("../src/concat-define");

	var output =
		concat(
			"../test/modules/print",
			["index"],
			{ externalDependencies: ["cats"] });

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/dependency.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPrintingModuleWithTwoExternalDependencies = function(test) {

	var concat = require("../src/concat-define");

	var output =
		concat(
			"../test/modules/print",
			["index"],
			{ externalDependencies: ["cats", "cups"] });

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/twoDependencies.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPrintingModuleWithExternalDependencyExplicitlyRequired = function(test) {

	var concat = require("../src/concat-define");

	var output =
		concat(
			"../test/modules/external",
			["index"],
			{ externalDependencies: ["cats"] });

	var fileSystem = require("fs");

	fileSystem.readFile(
		"test/builds/explicitDependency.js", "utf-8", function(error, data) {

			test.strictEqual(output, data);
			test.done();
		});
};
