define(["./firstInternal", "./secondInternal"], function Public(InternalOne, InternalTwo) {

	return {

		one: new InternalOne().hello(),
		two: new InternalTwo().hello()
	}
});
