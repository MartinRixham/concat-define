define(["./first"], function PublicTwo(PublicOne) {

	return {

		public: new PublicOne().hello()
	};
});
