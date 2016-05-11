module.exports = function(sourceModules) {

	var Path = require("./Path");

	var Dependencies = require("./Dependencies");

	var Module = require("./Module");

	var Modules = require("./Modules");

	this.getModules = function() {

		var modules = [];

		global.define = function() {

			var argumentArray = Array.prototype.slice.call(arguments);

			var factory = argumentArray.pop();

			var dependencyPaths = argumentArray.pop() || [];

			var paths = dependencyPaths.map(function(path) { return new Path(path); });

			var module =
				new Module(
					factory,
					new Dependencies(paths, modules),
					getModuleName(new Error()));

			modules.push(module);
		};

		sourceModules.forEach(function(module) { require(module); });

		delete global.define;

		return new Modules(modules.slice());
	};

	function getModuleName(error) {

		var stack = getStack(error);

		var path = new Path(stack[1].getFileName());

		return path.getModuleName();
	}

	function getStack(error) {

		var originalPrepareStackTrace = Error.prepareStackTrace;

		Error.prepareStackTrace = function(error, stack) { return stack; };

		var stack = error.stack;

		Error.prepareStackTrace = originalPrepareStackTrace;

		return stack;
	}
};
