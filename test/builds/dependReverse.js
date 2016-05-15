(function (factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else {

		factory(window);
	}
})(function(context) {

	context = context || {};

	var secondInternal = (function () {

		function InternalTwo() {

			this.hello = function() {

				return "Eh up plant.";
			};
		}

		return InternalTwo;
	})();

	var firstInternal = (function () {

		function InternalOne() {

			this.hello = function() {

				return "Hello world.";
			};
		}

		return InternalOne;
	})();

	context.Public = (function (InternalOne, InternalTwo) {

		return {

			one: new InternalOne().hello(),
			two: new InternalTwo().hello()
		}
	})(firstInternal, secondInternal);

	return context;
});