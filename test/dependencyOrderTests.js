exports.tearDown = function(callback) {

	for (var key in require.cache) {

		delete require.cache[key];
	}

	callback();
};

exports.testPrintingModule = function(test) {

	var concat = require("../src/concat-define");
	var output = concat("../test/modules/print", ["index"], {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/print.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPrintingModuleWithMainFunction = function(test) {

	var concat = require("../src/concat-define");
	var output = concat("../test/modules/print", ["index"], { mainFunction: "Hello" });
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/main.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPrintingTwoModules = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["one", "two"];
	var output = concat("../test/modules/two", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/two.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testOneModuleDependingOnAnother = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["internal", "public"];
	var output = concat("../test/modules/depend", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/depend.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testPassingModulesInWrongOrder = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["public", "internal"];
	var output = concat("../test/modules/depend", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/depend.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.moduleWithTwoDependencies = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["firstInternal", "secondInternal", "public"];
	var output = concat("../test/modules/dependTwice", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/dependTwice.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.dependencyChain = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["firstInternal", "secondInternal", "public"];
	var output = concat("../test/modules/chain", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/chain.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.dependencyChainBackwards = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["public", "secondInternal", "firstInternal"];
	var output = concat("../test/modules/chain", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/chain.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.dependOnPublicModule = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["first", "second"];
	var output = concat("../test/modules/dependPublic", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/dependPublic.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testModulesRequiredInReverseOrder = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["secondInternal", "firstInternal", "public"];
	var output = concat("../test/modules/dependReverse", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/dependReverse.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testMultipleModuleDependencies = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["One", "Two", "Three", "Four"];
	var output = concat("../test/modules/multiple", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/multiple.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};

exports.testEdgeCase = function(test) {

	var concat = require("../src/concat-define");
	var modules = ["One", "Two", "Three", "Four", "Five"];
	var output = concat("../test/modules/edge", modules, {});
	var fileSystem = require("fs");

	fileSystem.readFile("test/builds/edge.js", "utf-8", function(error, data) {

		test.strictEqual(output, data);
		test.done();
	});
};
