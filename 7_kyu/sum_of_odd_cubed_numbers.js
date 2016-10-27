// Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return 'undefined' if any of the values aren't numbers.
//
// Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
// Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);

var cubeOdd = function(arr) {
  if (arr.filter(el => typeof el !== "number").length > 1) { return undefined;};
  return arr.map( el => Math.pow(el,3))
            .filter(el => el % 2 !== 0)
            .reduce( (sum,el) => sum += el );
};

console.log(cubeOdd([1,2,3,4]));
console.log(cubeOdd(["a",12,9,"z",42]));
