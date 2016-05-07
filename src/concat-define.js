module.exports = function(sourceRoot) {

	var text = "";

	text += "(";

	var header = require("./header");

	text += header.toString();

	text +=
		")(function(context) {\n" +
		"\n" +
			"\tcontext = context || {};\n" +
		"\n" +
			"\t";

	var factories = [];

	GLOBAL.define = function(factory) {

		factories.push(factory);
	};

	require(sourceRoot);

	factories.forEach(function(factory) {

		text +=
			"context." + factory.name + " = (" + factory.toString() + ")();\n\n";
	});

	text += "\treturn context;\n});";

	return text;
};
