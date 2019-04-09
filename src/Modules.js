module.exports = function(modules) {

	this.getModuleStrings = function() {

		modules.sort(function(a, b) { return a.compareTo(b); });

		return modules.map(function(module) {

			var moduleString = module.getFactoryString();

			var dependencyIdentifiers = module.getDependencyIdentifiers(modules);

			moduleString += "(" + dependencyIdentifiers.join(", ") + ");";

			return moduleString;
		});
	};
};
