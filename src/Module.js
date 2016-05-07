module.exports = function(factory, dependencies) {

	this.getFactory = function() {

		return factory;
	};

	this.hasDependencies = function() {

		return !!dependencies;
	};
};
