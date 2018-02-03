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

	context.PublicOne = (function () {

		function PublicOne() {

			this.hello = function() {

				return "Hello world.";
			};
		}

		return PublicOne;
	})();

	context.PublicTwo = (function (PublicOne) {

		return {

			public : new PublicOne().hello()
		}
	})(context.PublicOne);

	return context;
});
