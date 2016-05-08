module.exports = function(factory, dependencies, error) {

	var Path = require("./Path");

	this.getIdentifier = function() {

		if (isPublic()) {

			return "context." + getPublicName();
		}
		else {

			return this.getName();
		}
	};

	this.getFactoryString = function() {

		var factoryString = factory.toString();

		// Add indent.
		factoryString = factoryString.replace(/\n/g, "\n\t");

		// Remove trailing indent.
		factoryString = factoryString.replace(/\t\n/g, "\n");

		// Remove factory name.
		factoryString = factoryString.replace(/^function.*?\(/g, "function (");

		return getAssignment() + "(" + factoryString + ")";
	};

	var self = this;

	function getAssignment() {

		if (isPublic()) {

			return "context." + getPublicName() + " = ";
		}
		else {

			return "var " + self.getName() + " = ";
		}
	}

	function isPublic() {

		return !!factory.name;
	}

	function getPublicName() {

		return factory.name;
	}

	this.dependsOn = function(other) {

		for (var i = 0; i < dependencies.length; i++) {

			var dependencyName = new Path(dependencies[i]).getModuleName();

			if (dependencyName == other.getName()) {

				return true;
			}
		}

		return false;
	};

	this.getName = function() {

		var stack = getStack(error);

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
};
