module.exports = function(sourceModules) {

	var Module = require("./Module");

	var Modules = require("./Modules");

	this.getModules = function() {

		var modules = [];

		global.define = function() {

			var argumentArray = Array.prototype.slice.call(arguments);

			var module =
				new Module(argumentArray.pop(), argumentArray.pop() || [], new Error());

			modules.push(module);
		};

		sourceModules.forEach(function(module) { require(module); });

		delete global.define;

		return new Modules(modules);
	};
};
