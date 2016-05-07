(function (factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else {

		factory(window);
	}
})(function(context) {

	context = context || {};

	context.One = (function () {

		return {

			one: "Hello world."
		}
	})();

	context.Two = (function () {

		return {

			two: "Eh up planet."
		}
	})();

	return context;
});
