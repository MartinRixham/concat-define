(function (factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else {

		factory(window);
	}
})(function(context) {

	context = context || {};

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