var ExternalDependency = require("./ExternalDependency");

module.exports = function(dependencyPaths, modules, externalDependencies) {

	this.getIdentifiers = function() {

		var dependencyModules = getDependencyModules();

		return dependencyModules.map(function(module) {

			return module.getIdentifier();
		});
	};

	this.dependOn = function(other) {

		return getDependencyModules().some(function(dependency) {

			return dependency.dependsOn(other);
		});
	};

	function getDependencyModules() {

		return dependencyPaths.map(findModule);
	}

	function findModule(path) {

		for (var j = 0; j < modules.length; j++) {

			var module = modules[j];

			if (module.hasPath(path)) {

				return module;
			}
		}

		for (var i = 0; i < externalDependencies.length; i++) {

			var library = externalDependencies[i];

			if (path.getModuleName() == library) {

				return new ExternalDependency(library);
			}
		}

		var message =
			"Could not find module " +
			path.getModuleName() +
			".";

		throw new Error(message);
	}
};
