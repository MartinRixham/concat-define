var path = require("path");

module.exports = function(filePath) {

	this.getModuleName = function() {

		return path.normalize(filePath);
	};
};
