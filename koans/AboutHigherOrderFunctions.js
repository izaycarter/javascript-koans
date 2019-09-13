var _; //globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });
    // dont really understand !!!COME BACK
    expect(odd).toEqual([1,3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

// makes a copy but doesnt change original array
    expect(numbersPlus1).toEqual([2, 3, 4]);
    // original array not ultred
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

// first time mem=0(inital num) x=1 2nd time mem=1 x=2 3rd time mem=3 x=3
    expect(reduction).toBe(6);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

// msg is checking if number that is being iterated through is true to condtion
    expect(msg).toEqual("falsetruefalse");
    expect(numbers).toEqual([1,2,3]);
  });

  it("should use 'all' to test whether all items pass condition", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

                        // function test
    var isEven = function(x) { return x % 2 === 0 };

// % sign breaks number down to see it if can divide to 0 remainder
// but all have to pass
    expect(_(onlyEven).all(isEven)).toBe(true);
// 5 can not! ttherfor false
    expect(_(mixedBag).all(isEven)).toBe(false);
  });

  it("should use 'any' to test if any items passes condition" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };
    //  works like the || so only one iterager need to pass
    expect(_(onlyEven).any(isEven)).toBe(true);
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  it("should use range to generate an array", function() {
      expect(_.range(3)).toEqual([0,1,2]);
      expect(_.range(1, 4)).toEqual([1,2,3]);
      // DOESNT MAKE SENSE!!!!!!
      expect(_.range(0, -4, -1)).toEqual([0,-1,-2,-3]);
  });

  it("should use flatten to make nested arrays easy to work with", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1, 2, 3, 4]);
  });

  it("should use chain() ... .value() to use multiple higher order functions", function() {
      var result = _([ [0, 1], 2 ]).chain()
                                    // chain connects muti order functions
                    // puts numbers in one array
                       .flatten()

                       // each item number is plused by one
                       .map(function(x) { return x+1 } )

                       // adds the numbers all up
                       .reduce(function (sum, x) { return sum + x })
                       // spits out just the value outside array
                       .value();

      expect(result).toEqual(6);
  });

});
