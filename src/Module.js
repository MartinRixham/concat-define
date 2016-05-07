module.exports = function(factory, dependencies) {

	this.hasName = function() {

		return !!factory.name;
	};

	this.getName = function() {

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
