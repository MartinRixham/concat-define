module.exports = function(filePath) {

	this.getModuleName = function() {

		path = require("path");

		return path.normalize(filePath);
	};
};
