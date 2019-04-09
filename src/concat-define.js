var Header = require("./Header");

var Define = require("./Define");

module.exports = function(rootDirectory, moduleFiles, options) {

	var externalDependencies = options.externalDependencies || [];
	var text = "(";

	text += new Header(externalDependencies).toString();

	text +=
		")(function(" + externalDependencies.join(", ") + ") {\n" +
		"\n" +
			"\tvar context = {};\n" +
		"\n";

	if (options.main) {

		text +=
			"\tcontext = function() { return context." +
			options.main +
			".apply(this, arguments); };\n\n";
	}

	var modules =
		new Define(rootDirectory, moduleFiles, externalDependencies).getModules();

	modules.getModuleStrings().forEach(function(moduleString) {

		text += "\t" + moduleString + "\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
