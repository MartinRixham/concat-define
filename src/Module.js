module.exports = function(factory, dependencies, error) {

	this.getName = function() {

		var stack = getStack(error);

		var Path = require("./Path");

		var path = new Path(stack[1].getFileName());

		return path.getModuleName();
	};

	function getStack(error) {

		var originalPrepareStackTrace = Error.prepareStackTrace;

		Error.prepareStackTrace = function(error, stack) { return stack; };

		var stack = error.stack;

		Error.prepareStackTrace = originalPrepareStackTrace;

		return stack;
	}

	this.isPublic = function() {

		return !!factory.name;
	};

	this.getPublicName = function() {

		return factory.name;
	};

	this.getFactoryString = function() {

		var factoryString = factory.toString();

		// Add indent.
		factoryString = factoryString.replace(/\n/g, "\n\t");

		// Remove trailing indent.
		factoryString = factoryString.replace(/\t\n/g, "\n");

		// Remove factory name.
		factoryString = factoryString.replace(/^function.*?\(/g, "function (");

		return factoryString;
	};

	this.hasDependencies = function() {

		return !!dependencies;
	};
};
