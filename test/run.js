exports.tearDown = function(callback) {

	for (var key in require.cache) {

		delete require.cache[key];
	}

	callback();
};

exports.testPrintingModule = function(test) {

	var concat = require("../src/concat-define");

	var output = concat(["../test/modules/print/index"]);

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/print.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPrintingTwoModules = function(test) {

	var concat = require("../src/concat-define");

	var modules =
		[
			"../test/modules/two/one",
			"../test/modules/two/two"
		];

	var output = concat(modules);

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/two.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testOneModuleDependingOnAnother = function(test) {

	var concat = require("../src/concat-define");

	var modules =
		[
			"../test/modules/depend/internal",
			"../test/modules/depend/public"
		];

	var output = concat(modules);

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/depend.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPassingModulesInWrongOrder = function(test) {

	var concat = require("../src/concat-define");

	var modules =
		[
			"../test/modules/depend/public",
			"../test/modules/depend/internal"
		];

	var output = concat(modules);

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/depend.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.moduleWithTwoDependencies = function(test) {

	var concat = require("../src/concat-define");

	var modules =
		[
			"../test/modules/dependTwice/firstInternal",
			"../test/modules/dependTwice/secondInternal",
			"../test/modules/dependTwice/public"
		];

	var output = concat(modules);

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/dependTwice.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.dependencyChain = function(test) {

	var concat = require("../src/concat-define");

	var modules =
		[
			"../test/modules/chain/firstInternal",
			"../test/modules/chain/secondInternal",
			"../test/modules/chain/public"
		];

	var output = concat(modules);

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/chain.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.dependencyChainBackwards = function(test) {

	var concat = require("../src/concat-define");

	var modules =
		[
			"../test/modules/chain/public",
			"../test/modules/chain/secondInternal",
			"../test/modules/chain/firstInternal"
		];

	var output = concat(modules);

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/chain.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.dependOnPublicModule = function(test) {

	var concat = require("../src/concat-define");

	var modules =
		[
			"../test/modules/dependPublic/first",
			"../test/modules/dependPublic/second"
		];

	var output = concat(modules);

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/dependPublic.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testModulesRequiredInReverseOrder = function(test) {

	var concat = require("../src/concat-define");

	var modules =
		[
			"../test/modules/dependReverse/secondInternal",
			"../test/modules/dependReverse/firstInternal",
			"../test/modules/dependReverse/public"
		];

	var output = concat(modules);

	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/dependReverse.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};
