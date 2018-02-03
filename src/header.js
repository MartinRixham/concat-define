module.exports = function(factory) {

	if (typeof define === "function" && define.amd) {

		define([], factory);
	}
	else if (typeof module === "object" && module.exports) {

		module.exports = factory();
	}
	else {

		var result = factory();

		for (var key in result) {

			this[key] = result[key];
		}
	}
};
