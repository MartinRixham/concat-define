(function (factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else {

		factory(window);
	}
})(function(context) {

	context = context || {};

	var firstInternal = (function () {

		function InternalOne() {

			this.hello = function() {

				return "Hello world.";
			};
		}

		return InternalOne;
	})();

	var secondInternal = (function (InternalOne) {

		function InternalTwo() {

			this.hello = function() {

				return new InternalOne().hello();
			};
		}

		return InternalTwo;
	})(firstInternal);

	context.Public = (function (InternalTwo) {

		return {

			two: new InternalTwo().hello()
		}
	})(secondInternal);

	return context;
});
