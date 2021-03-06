(function(factory) {

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

	var firstInternal = (function () {

		function InternalOne() {

			this.hello = function() {

				return "Hello world.";
			};
		}

		return InternalOne;
	})();

	var secondInternal = (function () {

		function InternalTwo() {

			this.hello = function() {

				return "Eh up plant.";
			};
		}

		return InternalTwo;
	})();

	context.Public = (function (InternalOne, InternalTwo) {

		return {

			one: new InternalOne().hello(),
			two: new InternalTwo().hello()
		}
	})(firstInternal, secondInternal);

	return context;
});
