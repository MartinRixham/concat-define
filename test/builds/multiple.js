(function (factory) {

	if (typeof define === "function" && define.amd) {

		define(factory);
	} else if (typeof module === "object" && module.exports) {

		factory(module.exports);
	} else {

		factory(this);
	}
})(function(context) {

	context = context || {};

	var Three = (function () {

		function Three() {}

		return Three;
	})();

	var Four = (function () {

		function Four() {}

		return Four;
	})(Three);

	context.One = (function () {

		function One(model) {}

		return One;
	})(Four);

	context.Two = (function () {

		function Two(datum) {}

		return Two;
	})(Three);

	return context;
});
