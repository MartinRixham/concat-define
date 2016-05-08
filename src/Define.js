module.exports = function(sourceRoot) {

	this.getModules = function() {

		var modules = [];

		var Module = require("./Module");

		GLOBAL.define = function() {

			var argumentArray = Array.prototype.slice.call(arguments);

			modules.push(new Module(argumentArray.pop(), argumentArray.pop()));
		};

		require(sourceRoot);

		delete GLOBAL.define;

		return modules;
	};
};
