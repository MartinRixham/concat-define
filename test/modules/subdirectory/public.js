define(["sub/internal"], function Public(InternalTwo) {

	return {

		two: new InternalTwo().hello()
	}
});