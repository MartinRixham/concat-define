(function (factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else {

		factory(window);
	}
})(function(context) {

	context = context || {};

	context.One = (function One() {

		return {

			one: "Hello world."
		}
	})();

	context.Two = (function Two() {

		return {

			two: "Eh up planet."
		}
	})();

	return context;
});
