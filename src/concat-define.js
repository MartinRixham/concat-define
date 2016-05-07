module.exports = function(sourceRoot) {

	var text;

	GLOBAL.define = function(factory) {

		text = factory.toString();
	};

	require(sourceRoot);

	return text;
};
