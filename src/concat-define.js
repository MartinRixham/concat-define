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

	var dependencies = [];

	modules.forEach(function(module) {

		if (module.isPublic()) {

			text += "\tcontext." + module.getPublicName();
		}
		else {

			var name = module.getName();

			text += "\tvar " + name;

			dependencies.push(name);
		}

		text += " = (" + module.getFactoryString() + ")(";

		if (module.hasDependencies()) {

			text += dependencies.join(", ");
		}

		text += ");\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
