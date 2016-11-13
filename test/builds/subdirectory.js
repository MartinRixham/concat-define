(function (factory) {

	if (typeof define === "function" && define.amd) {

		define([], factory);
	} else if (typeof module === "object" && module.exports) {

		module.exports = factory();
	} else {

		factory(this);
	}
})(function(context) {

	context = context || {};

	var sub_sub_internal = (function () {

		function InternalOne() {

			this.hello = function() {

				return "Hello world.";
			};
		}

		return InternalOne;
	})();

	var sub_internal = (function (InternalOne) {

		function InternalTwo() {

			this.hello = function() {

				return new InternalOne().hello();
			};
		}

		return InternalTwo;
	})(sub_sub_internal);

	context.Public = (function (InternalTwo) {

		return {

			two: new InternalTwo().hello()
		}
	})(sub_internal);

	return context;
});
