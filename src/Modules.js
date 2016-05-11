module.exports = function(modules) {

	this.getModuleStrings = function() {

		modules.sort(function(a, b) { return a.compareTo(b); });

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
