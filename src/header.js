module.exports = function(factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else {

		factory(window);
	}
};
