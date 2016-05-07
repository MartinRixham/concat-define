module.exports = function(sourceRoot) {

	var text = "";

	text += "(";

	var header = require("./header");

	text += header.toString();

	text +=
		")(function(context) {\n" +
		"\n" +
			"\tcontext = context || {};\n" +
		"\n";

	var factories = [];

	GLOBAL.define = function(factory) {

		factories.push(factory);
	};

	require(sourceRoot);

	factories.forEach(function(factory) {

		var factoryString = factory.toString();

		// Add indent.
		factoryString = factoryString.replace(/\n/g, "\n\t");

		// Remove trailing indent.
		factoryString = factoryString.replace(/\t\n/g, "\n");

		// Remove factory name.
		factoryString = factoryString.replace(/^function.*?\(/g, "function (");

		text +=
			"\tcontext." + factory.name + " = (" + factoryString + ")();\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
