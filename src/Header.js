module.exports = function(externalDependencies) {

	this.toString = function() {

		var dependencyStrings = [];
		var requireCalls = [];

		for (var i = 0; i < externalDependencies.length; i++) {

			dependencyStrings[i] = "\"" + externalDependencies[i] + "\"";
			requireCalls[i] = "require(\"" + externalDependencies[i] + "\")";
		}

		return "function(factory) {\n" +
			"\n" +
			"\tif (typeof define === \"function\" && define.amd) {\n" +
			"\n" +
				"\t\tdefine([" + dependencyStrings.join(", ") + "], factory);\n" +
			"\t}\n" +
			"\telse if (typeof module === \"object\" && module.exports) {\n" +
			"\n" +
				"\t\tmodule.exports = factory(" + requireCalls.join(", ") + ");\n" +
			"\t}\n" +
			"\telse {\n" +
			"\n" +
				"\t\tvar result = factory(" + externalDependencies.join(", ") + ");\n" +
			"\n" +
				"\t\tfor (var key in result) {\n" +
			"\n" +
					"\t\t\tthis[key] = result[key];\n" +
				"\t\t}\n" +
			"\t}\n" +
		"}";
	};
};
