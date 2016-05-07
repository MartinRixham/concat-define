module.exports = function(sourceRoot) {

	var text = "(";

	var header = require("./header");

	text += header.toString();

	text +=
		")(function(context) {\n" +
		"\n" +
			"\tcontext = context || {};\n" +
		"\n";

	var modules = [];

	var Module = require("./Module");

	GLOBAL.define = function() {

		var argumentArray = Array.prototype.slice.call(arguments);

		modules.push(new Module(argumentArray.pop(), argumentArray.pop()));
	};

	require(sourceRoot);

	var dependency = "";

	modules.forEach(function(module) {

		var factory = module.getFactory();

		var factoryString = factory.toString();

		// Add indent.
		factoryString = factoryString.replace(/\n/g, "\n\t");

		// Remove trailing indent.
		factoryString = factoryString.replace(/\t\n/g, "\n");

		// Remove factory name.
		factoryString = factoryString.replace(/^function.*?\(/g, "function (");

		if (factory.name) {

			text += "\tcontext." + factory.name;
		}
		else {

			text += "\tvar internal";
			dependency = "internal";
		}

		text += " = (" + factoryString + ")(";

		if (module.hasDependencies()) {

			text += dependency;
		}

		text += ");\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
