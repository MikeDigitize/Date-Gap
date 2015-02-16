describe("Date gap", function () {

	describe("1. Get days between two dates", function(){

		it("a. Get days between 1/1/2015 and 13/3/2015", function() {
			expect(dateGap().getDaysBetweenTwoDates(1, 1, 2015, 13, 3, 2015)).toBe(72);
		});

		it("b. Get days between 1/1/2013 and 13/3/2015", function() {
			expect(dateGap().getDaysBetweenTwoDates(1, 1, 2013, 13, 3, 2015)).toBe(802);
		});

		it("c. Get days between 1/2/2015 and 13/2/2015", function() {
			expect(dateGap().getDaysBetweenTwoDates(1, 2, 2015, 13, 2, 2015)).toBe(12);
		});

		it("d. Get days between 21/1/2015 and 7/2/2015", function() {
			expect(dateGap().getDaysBetweenTwoDates(21, 1, 2015, 7, 2, 2015)).toBe(17);
		});

		it("e. Get days between 1/1/2015 and 1/3/2015", function() {
			expect(dateGap().getDaysBetweenTwoDates(1, 1, 2015, 1, 3, 2015)).toBe(60);
		});

		it("f. Get days between 21/1/2015 and 1/3/2015", function() {
			expect(dateGap().getDaysBetweenTwoDates(21, 1, 2015, 1, 3, 2015)).toBe(39);
		});

		it("g. Get days between 21/11/2014 and 13/2/2015", function() {
			expect(dateGap().getDaysBetweenTwoDates(21, 11, 2014, 13, 2, 2015)).toBe(84);
		});

		it("h. Get days between 31/3/2013 and 13/2/2015", function() {
			expect(dateGap().getDaysBetweenTwoDates(31, 3, 2013, 13, 2, 2015)).toBe(684);
		});

		it("i. Get days between 21/11/1979 and 15/2/2015", function() {
			expect(dateGap().getDaysBetweenTwoDates(21, 11, 1979, 15, 2, 2015)).toBe(12870);
		});

	});

});