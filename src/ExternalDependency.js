module.exports = function(name) {

	this.getIdentifier = function() {

		return name;
	};

	this.dependsOn = function() {

		return false;
	};
};
