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

	var dependency = "";

	modules.forEach(function(module) {

		if (module.hasName()) {

			text += "\tcontext." + module.getName();
		}
		else {

			text += "\tvar internal";
			dependency = "internal";
		}

		text += " = (" + module.getFactoryString() + ")(";

		if (module.hasDependencies()) {

			text += dependency;
		}

		text += ");\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
