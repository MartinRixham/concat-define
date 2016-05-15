module.exports = function(absolutePath, rootDirectory) {

	this.getModuleName = function() {

		var path = require("path");

		var fileName = path.relative(path.join(__dirname, rootDirectory), absolutePath);

		return fileName.replace(".js", "");
	};
};
