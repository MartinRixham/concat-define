(function (factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else if (typeof module === "object" && module.exports) {

		module.exports = factory();
	} else {

		factory(this);
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
