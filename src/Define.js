var FilePath = require("./FilePath");

var ModulePath = require("./ModulePath");

var Dependencies = require("./Dependencies");

var Module = require("./Module");

var Modules = require("./Modules");

var ExternalModule = require("./ExternalModule");

module.exports = function(rootDirectory, moduleFiles, externalDependencies) {

	this.getModules = function() {

		var modules = [];

		global.define = function() {

			var argumentArray = Array.prototype.slice.call(arguments);
			var factory = argumentArray.pop();
			var dependencyPaths = argumentArray.pop() || [];

			var externalModules =
				externalDependencies.map(function(library) {

					return new ExternalModule(library);
				});

			var paths =
				dependencyPaths.map(function(path) { return new ModulePath(path); });

			var module =
				new Module(
					factory,
					new Dependencies(paths, modules, externalModules),
					getFilePath(new Error()));

			modules.push(module);
		};

		moduleFiles.forEach(function(file) {

			require(require("path").join(rootDirectory, file));
		});

		delete global.define;

		return new Modules(modules.slice());
	};

	function getFilePath(error) {

		var stack = getStack(error);

		return new FilePath(stack[1].getFileName(), rootDirectory);
	}

	function getStack(error) {

		var originalPrepareStackTrace = Error.prepareStackTrace;

		Error.prepareStackTrace = function(error, stack) { return stack; };

		var stack = error.stack;

		Error.prepareStackTrace = originalPrepareStackTrace;

		return stack;
	}
};
