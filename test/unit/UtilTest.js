describe ("factorial",function(){
	
	    var testCase = [
	            {
	                n : 0,
	                factorial : 1
	            },
	            {
	                n : 1,
	                factorial : 1
	            },
	            {
	                n : 2,
	                factorial : 2
	            },
	            {
	                n : 3,
	                factorial : 6
	            },
	            {
	                n : 4,
	                factorial : 24
	            },
	            {
	                n : 5,
	                factorial : 120
	            },
	        ];
	    
	    testCase.forEach(function(testCase) {
	        it("should returns " + testCase.factorial + " when n = " + testCase.n, function() {
	            var result = Util.factorial(testCase.n);
	            expect(result).toEqual(testCase.factorial);
	        });
	    });
	});

describe ("arrangement",function(){
	
    var testCase = [
            {
                n : 0,
                r : 0,
                arrangement : 1
            },
            {
                n : 1,
                r : 1,
                arrangement : 1
            },
            {
                n : 2,
                r : 1,
                arrangement : 2
            },
            {
                n : 5,
                r : 2,
                arrangement : 20
            },
           
        ];
    
    testCase.forEach(function(testCase) {
        it("should returns " + testCase.arrangement + " when n = " + testCase.n + " and r = " + testCase.r, function() {
            var result = Util.arrangement(testCase.n,testCase.r);
            expect(result).toEqual(testCase.arrangement);
        });
    });
});