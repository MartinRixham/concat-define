(function(factory) {

	if (typeof define === "function" && define.amd) {

		define(["cats"], factory);
	}
	else if (typeof module === "object" && module.exports) {

		module.exports = factory(require("cats"));
	}
	else {

		var result = factory(cats);

		for (var key in result) {

			this[key] = result[key];
		}
	}
})(function(cats) {

	var context = {};

	context.Hello = (function () {

		return function() {

			this.hello = function() { return "Hello world."; };
		};
	})();

	return context;
});
