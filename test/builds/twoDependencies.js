(function(factory) {

	if (typeof define === "function" && define.amd) {

		define(["cats", "cups"], factory);
	}
	else if (typeof module === "object" && module.exports) {

		module.exports = factory(require("cats"), require("cups"));
	}
	else {

		var result = factory(cats, cups);

		for (var key in result) {

			this[key] = result[key];
		}
	}
})(function(cats, cups) {

	var context = {};

	context.Hello = (function () {

		return function() {

			this.hello = function() { return "Hello world."; };
		};
	})();

	return context;
});
