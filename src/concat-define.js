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
			"\tcontext.Hello = (";

	GLOBAL.define = function(factory) {

		text += factory.toString();
	};

	require(sourceRoot);

	text += ")();\n\n\treturn context;\n});";

	return text;
};
