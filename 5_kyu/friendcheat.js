// removeNb(26) should return [[15, 21], [21, 15]]

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26];
//
// var result = arr.reduce((a,b)=> a + b);
// console.log(result);

var removeNB = function(n) {
  var arr = [];
  for (var i = 1; i <= n; i++){
    arr.push(i);
  }
  var result = [];
  var sumTotal = n*(n+1)/2;

  for (var i = 0; i < arr.length; i++){
    for (var j = i + 1; j < arr.length; j++) {
      var first = arr[i];
      var second = arr[j];
      var multiply = arr[i] * arr[j];
      var total = sumTotal - first - second;
      if (multiply === total) {
        result.push([first,second], [second,first]);
      }
    }
  }
  return result;
};

console.log(removeNB(26));
console.log(removeNB(100));
