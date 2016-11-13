module.exports = function(factory, dependencies, path) {

	this.getIdentifier = function() {

		if (isPublic()) {

			return "context." + getPublicName();
		}
		else {

			return path.getModuleName().replace(/\//g, "_");
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

	function getAssignment() {

		if (isPublic()) {

			return "context." + getPublicName() + " = ";
		}
		else {

			return "var " + path.getModuleName().replace(/\//g, "_") + " = ";
		}
	}

	function isPublic() {

		return !!factory.name;
	}

	function getPublicName() {

		return factory.name;
	}

	this.getDependencyIdentifiers = function() {

		return dependencies.getIdentifiers();
	};

	this.getName = function() {

		return path.getModuleName();
	};

	this.hasPath = function(other) {

		return other.getModuleName() == path.getModuleName();
	};

	this.compareTo = function(other) {

		var dependsForwards = this.dependsOn(other);
		var dependsBackwards = other.dependsOn(this);

		if (dependsForwards && dependsBackwards) {

			var message =
				path.getModuleName() +
				" and " +
				other.getName() +
				" are vertices on a dependency cycle.";

			throw new Error(message);
		}
		else if (dependsForwards) {

			return 1;
		}
		else if (dependsBackwards) {

			return -1;
		}
		else {

			this.setEqualTo(other);

			return 0;
		}
	};

	var self = this;

	this.dependsOn = function(other) {

		return self == other || dependencies.dependOn(other);
	};

	this.setEqualTo = function(equal) {

		var originalDependsOn = this.dependsOn;
		var equalOriginalDependsOn = equal.dependsOn;

		equal.dependsOn = this.dependsOn = function(other) {

			return originalDependsOn(other) || equalOriginalDependsOn(other);
		};
	};
};
