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

		var factoryString =
			factory.toString().replace(/\n/g, "\n\t").replace(/\n\t\n/g, "\n\n");

		text +=
			"\tcontext." + factory.name + " = (" + factoryString + ")();\n\n";
	});

	text += "\treturn context;\n});\n";

	return text;
};
