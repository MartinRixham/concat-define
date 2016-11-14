(function (factory) {

	if (typeof define === "function" && define.amd) {

		define([], factory);
	}
	else if (typeof module === "object" && module.exports) {

		module.exports = factory();
	}
	else {

		factory(this);
	}
})(function(context) {

	context = context || {};

	context.Hello = (function () {

		return {

			hello: "Hello world."
		}
	})();

	return context;
});
