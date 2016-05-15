module.exports = function(dependencyPaths, modules) {

	this.getIdentifiers = function() {

		var dependencies = getDependencyModules();

		return dependencies.map(function(module) {

			return module.getIdentifier();
		});
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

			var path = dependencyPaths[i];

			for (var j = 0; j < modules.length; j++) {

				var module = modules[j];

				if (module.hasPath(path)) {

					dependencyModules.push(module);

					break;
				}
				else if (j == modules.length - 1) {

					var message =
						"Could not find module " +
						path.getModuleName() +
						".";

					throw new Error(message);
				}
			}
		}

		return dependencyModules;
	}
};
