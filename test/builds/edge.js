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

	var Two = (function () {

		function Two() {}

		return Two;
	})();

	var Three = (function () {

		function Three() {}

		return Three;
	})();

	var Four = (function () {

		function Four() {}

		return Four;
	})(Three);

	var Five = (function () {

		function Five() {}

		return Five;
	})(Four, Three);

	context.One = (function () {

		function One() {}

		return One;
	})(Five, Two);

	return context;
});
