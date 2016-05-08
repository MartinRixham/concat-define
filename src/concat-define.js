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

			var publicName = module.getPublicName();

			text += "\tcontext." + publicName;

			dependencies.push({

				name: module.getName(),
				identifier: "context." + publicName
			});
		}
		else {

			var name = module.getName();

			text += "\tvar " + name;

			dependencies.push({ name: name, identifier: name });
		}

		text += " = (" + module.getFactoryString() + ")(";

		var moduleDependencies = [];

		for (var i = 0; i < dependencies.length; i++) {

			if (module.dependsOn(dependencies[i].name)) {

				moduleDependencies.push(dependencies[i].identifier);
			}
		}

		text += moduleDependencies.join(", ");

		text += ");\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
