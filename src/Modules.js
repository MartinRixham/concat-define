module.exports = function(modules) {

	this.getModuleStrings = function() {

		var moduleStrings = [];

		modules.forEach(function(module) {

			var moduleString = module.getFactoryString();

			var dependencies = [];

			for (var i = 0; i < modules.length; i++) {

				if (module.dependsOn(modules[i])) {

					dependencies.push(modules[i].getIdentifier());
				}
			}

			moduleString += "(" + dependencies.join(", ") + ");";

			moduleStrings.push(moduleString);
		});

		return moduleStrings;
	};
};
