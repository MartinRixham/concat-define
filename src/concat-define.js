module.exports = function(sourceRoot) {

	var text = "";

	text +=
		"(function(factory) {\n" +
		"\n" +
			"\tif (typeof define === \"function\" && define.amd) {\n" +
		"\n" +
				"\t\tdefine(factory);\n" +
			"\t} else if (typeof exports === \"object\" && typeof module === \"object\") {\n" +
		"\n" +
				"\t\tfactory(module.exports || exports);\n" +
			"\t} else {\n" +
		"\n" +
				"\t\tfactory(window);\n" +
			"\t}\n" +
		"})(function(context) {\n" +
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
