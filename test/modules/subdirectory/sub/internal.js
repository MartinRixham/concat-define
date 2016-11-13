define(["sub/sub/internal"], function (InternalOne) {

	function InternalTwo() {

		this.hello = function() {

			return new InternalOne().hello();
		};
	}

	return InternalTwo;
});
