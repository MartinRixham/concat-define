module.exports = function(sourceRoot) {

	var text = "(";

	var header = require("./header");

	text += header.toString();

	text +=
		")(function(context) {\n" +
		"\n" +
			"\tcontext = context || {};\n" +
		"\n";

	var Define = require("./Define");

	var modules = new Define(sourceRoot).getModules();

	modules.getModuleStrings().forEach(function(moduleString) {

		text += "\t" + moduleString + "\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
