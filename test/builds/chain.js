(function (factory) {

	if (typeof define === "function" && define.amd) {

		define([], factory);
	}
	else if (typeof module === "object" && module.exports) {

		module.exports = factory();
	}
	else {

		factory(this);
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
