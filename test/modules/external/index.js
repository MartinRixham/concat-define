define(["cats"], function Hello(cats) {

	return function() {

		this.hello = function() { return "Hello " + cats; };
	};
});
