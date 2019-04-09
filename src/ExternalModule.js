module.exports = function(name) {

	this.getIdentifier = function() {

		return name;
	};

	this.dependsOn = function() {

		return false;
	};

	this.hasPath = function(path) {

		return path.getModuleName() == name;
	};
};
