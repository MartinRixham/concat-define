define(["./secondInternal"], function Public(InternalTwo) {

	return {

		two: new InternalTwo().hello()
	}
});