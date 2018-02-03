module.exports = function(rootDirectory, moduleFiles, mainFunction) {

	var text = "(";

	var header = require("./header");

	text += header.toString();

	text +=
		")(function() {\n" +
		"\n" +
			"\tvar context = {};\n" +
		"\n";

	if (mainFunction) {

		text +=
			"\tcontext = function() { return context." +
			mainFunction +
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
