// (1) Number of elements that are present in both arrays
// (2) Number of elements that are present in only one array
// (3) Number of remaining elements after extracting to arr1, the elements that are present in arr2.
// (4) Number of remaining elements after extracting to arr2, the elements that are present in arr1.

arr1 = [1, 2 , 3, 4, 5 ,6 ,7 ,8 ,9, 9]
arr2 = [2, 4, 6, 8, 10, 12, 14]
// process_2arrays(arr1, arr2) --------> [4, 8, 5, 3]

var process2Arrays = function(arr1, arr2) {
  // Filter array for unique values. Only returns values where element index position is equal to current index position of the iteration. E.g. in arr1 example the first 9 is indexOf 8 so passes but the second 9 is in index of 9 but the indexOf returns 8 which is the first 9 that it encouters
  arr1 = arr1.filter(function(el, index){
    return arr1.indexOf(el) === index;
  });

  arr2 = arr2.filter(function(el, index){
    return arr2.indexOf(el) === index;
  });

  var one = arr1.filter(function(el){
    return arr2.indexOf(el) !== -1;
  });
  console.log(one);
  var three = arr1.filter(function(el){
    return arr2.indexOf(el) === -1;
  });

  var four = arr2.filter(function(el){
    return arr1.indexOf(el) === -1;
  });

  var two = three.concat(four);
  console.log(two);
  var result = [one.length, two.length, three.length, four.length];

  return result;
};

console.log(process2Arrays(arr1,arr2));
