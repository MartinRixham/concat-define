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

	modules.forEach(function(module) {

		text += "\t" + module.getFactoryString();

		var dependencies = [];

		for (var i = 0; i < modules.length; i++) {

			if (module.dependsOn(modules[i])) {

				dependencies.push(modules[i].getIdentifier());
			}
		}

		text += "(" + dependencies.join(", ") + ");\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
