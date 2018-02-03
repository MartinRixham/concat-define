(function (factory) {

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
})(function() {

	var context = {};

	var internal = (function () {

		function Internal() {

			this.hello = function() {

				return "Hello world.";
			};
		}

		return Internal;
	})();

	context.Public = (function (Internal) {

		return {

			public : new Internal().hello()
		}
	})(internal);

	return context;
});
