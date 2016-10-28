// returns true if every element in an array is an integer.
// returns true if array is empty.
// returns false for every other input.

// Test.assertEquals(isIntArray([]), true, "Input: []");
// Test.assertEquals(isIntArray([1, 2, 3, 4]), true, "Input: [1, 2, 3, 4]");
// Test.assertEquals(isIntArray([1, 2, 3, NaN]), false, "Input: [1, 2, 3, NaN]");

function isIntArray(arr) {
  if (!Array.isArray(arr) || arr[0] === null) {return false;};
  var intArr = arr.filter(function(el){
    return !isNaN(el) && el % 1 === 0 && typeof el !== 'string';
  });
  return (intArr.length === arr.length) ? true : false;
}

console.log(isIntArray([1,2,3,4]));
console.log(isIntArray([]));
console.log(isIntArray([1,2,3,NaN]));
console.log(isIntArray(null));
