(function (factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else {

		factory(window);
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
