(function(factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else if (typeof exports === "object" && typeof module === "object") {

		factory(module.exports || exports);
	} else {

		factory(window);
	}
})(function(context) {

	context = context || {};

	context.Hello = (function Hello() {

	return {

		hello: "Hello world."
	}
})();

	return context;
});