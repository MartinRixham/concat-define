module.exports = function(dependencyPaths, modules, externalModules) {

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

		modules = modules.concat(externalModules);

		for (var i = 0; i < modules.length; i++) {

			var module = modules[i];

			if (module.hasPath(path)) {

				return module;
			}
		}

		var message = "Could not find module " + path.getModuleName() + ".";

		throw new Error(message);
	}
};
