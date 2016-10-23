var _ = require('underscore');
// const addOne = (a) => a + 1
// const multTwo = (b) => b * 2
// const addOneMultTwo = (c) => multTwo(addOne(c))
// Test.assertEquals(compose(multTwo, addOne)(5), 12, 'compose two functions')
// Test.assertEquals(compose(addOne, multTwo, addOne, addOne)(2), 9, 'compose four functions')
// Test.assertEquals(compose(addOne)(3), 4, 'compose one function')
// Test.assertEquals(compose()(10), 10, 'compose no functions')

// const compose = (f, g) => (a) => f(g(a))

var addOne = function(a){
  return a + 1;
};

var multTwo = function(b){
  return b * 2;
};

var compose = function(fun1, fun2, fun3) {
  return function(arg){
    return fun1(fun2(fun3(arg)));
  };
};

// var multTwoMultTwoAddOne = compose(addOne, multTwo, multTwo);
// console.log(multTwoMultTwoAddOne(3));



var composeMult = function() {
  // Take arguments object and convert into into an array of functions. We reverse it because the curry function direction is right to left, execute the last function first and then go backwards
  var functions = Array.prototype.slice.call(arguments).reverse();
  console.log(functions);

  // We return a new function which takes the initial function arguments passed in and awaits a new paramater once initialized
  return function() {
    // We cache the first argument received
    var result = arguments[0];
    console.log(result);
    for (var i = 0; i < functions.length; i++) {
      // Execute logic from right to left, call on the functions in the argument and pass it the paramater. The result is then accessed by the next function element in the function arguments array
      result = functions[i](result);
      console.log(result);
    }
    // Then finally return the result
    return result;
  }
};
// RIGHT TO LEFT
console.log(composeMult(addOne, multTwo, multTwo)(3));
var addOneMultTwox3 = composeMult(multTwo, multTwo, multTwo, addOne);
console.log(addOneMultTwox3(3));
