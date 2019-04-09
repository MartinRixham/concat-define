module.exports = function(filePath) {

	this.getModuleName = function() {

		var path = require("path");

		return path.normalize(filePath);
	};
};
