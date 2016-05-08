module.exports = function(path) {

	this.getModuleName = function() {

		return path.split("/").pop().replace(".js", "");
	};
};
