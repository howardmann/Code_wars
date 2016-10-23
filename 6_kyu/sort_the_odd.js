// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

var sortArray = function(arr){
  var odd = [];
  var even = arr.map(function(el){
    if (el !== 0 && el % 2 !== 0) {
      odd.push(el);
    } else {
      return el;
    }
  });

  odd = odd.sort(function(a,b){
    return a - b;
  });

  var result = even.map(function(el){
    if (el === undefined){
      return odd.shift();
    } else {
      return el;
    }
  });
  return result;
};

// console.log(sortArray([5, 3, 2, 8, 1, 4]));
// console.log(sortArray([5, 3, 1, 8, 0]));
// console.log(sortArray([]));
// console.log(sortArray([1,11,2,8,3,4,5]));

// Refactored above logic

var sortArray2 = function(arr){
  // Find all odd numbers and sort ascending order
  var odd = arr.filter((el)=> el % 2 !== 0)
                .sort((a,b)=>a - b);

  // Iterate through array and replace odd numbers with new ordered values and keep even numbers as is
  return arr.map((el)=> el % 2 !== 0 ? odd.shift() : el );
};

console.log(sortArray2([1,11,2,8,3,4,5]));
