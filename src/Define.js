module.exports = function(sourceRoot) {

	this.getModules = function() {

		var modules = [];

		var Module = require("./Module");

		GLOBAL.define = function() {

			var argumentArray = Array.prototype.slice.call(arguments);

			var module =
				new Module(argumentArray.pop(), argumentArray.pop(), new Error());

			modules.push(module);
		};

		require(sourceRoot);

		delete GLOBAL.define;

		return modules;
	};
};
