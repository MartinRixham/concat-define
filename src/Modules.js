module.exports = function(modules) {

	this.getModuleStrings = function() {

		var moduleStrings = [];

		modules.forEach(function(module) {

			var moduleString = module.getFactoryString();

			var dependencyIdentifiers = module.getDependencyIdentifiers(modules);

			moduleString += "(" + dependencyIdentifiers.join(", ") + ");";

			moduleStrings.push(moduleString);
		});

		return moduleStrings;
	};
};
