module.exports = function(rootDirectory, moduleFiles, mainFunction) {

	var text = "(";

	var header = require("./header");

	text += header.toString();

	var context;

	if (mainFunction) {

		context =
			"function() { return context." + mainFunction + ".apply(this, arguments); }";
	}
	else {

		context = "{}";
	}

	text +=
		")(function() {\n" +
		"\n" +
			"\tvar context = " + context + ";\n" +
		"\n";

	var Define = require("./Define");

	var modules = new Define(rootDirectory, moduleFiles).getModules();

	modules.getModuleStrings().forEach(function(moduleString) {

		text += "\t" + moduleString + "\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
