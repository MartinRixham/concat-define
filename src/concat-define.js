module.exports = function(rootDirectory, moduleFiles, options) {

	var Header = require("./Header");

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

	var Define = require("./Define");

	var modules = new Define(rootDirectory, moduleFiles).getModules();

	modules.getModuleStrings().forEach(function(moduleString) {

		text += "\t" + moduleString + "\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
