module.exports = function(dependencyPaths, modules) {

	this.getIdentifiers = function() {

		var dependencyIdentifiers = [];

		for (var i = 0; i < dependencyPaths.length; i++) {

			var dependencyName = dependencyPaths[i].getModuleName();

			for (var j = 0; j < modules.length; j++) {

				var module = modules[j];

				if (dependencyName == module.getName()) {

					dependencyIdentifiers.push(module.getIdentifier());

					break;
				}
				else if (j == modules.length - 1) {

					throw new Error("Could not find module " + dependencyName + ".");
				}
			}
		}

		return dependencyIdentifiers;
	};

	this.dependOn = function(other) {

		var dependencies = getDependencyModules();

		for (var i = 0; i < dependencies.length; i++) {

			if (dependencies[i].dependsOn(other)) {

				return true;
			}
		}

		return false;
	};

	function getDependencyModules() {

		var dependencyModules = [];

		for (var i = 0; i < dependencyPaths.length; i++) {

			var dependencyName = dependencyPaths[i].getModuleName();

			for (var j = 0; j < modules.length; j++) {

				var module = modules[j];

				if (dependencyName == module.getName()) {

					dependencyModules.push(module);
				}
			}
		}

		return dependencyModules;
	}
};
