(function (factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else {

		factory(window);
	}
})(function(context) {

	context = context || {};

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
