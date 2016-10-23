// Sum of all multiples between 3 and 5 up to n

var solution = function(n) {
  // Create array of numbers up to n
  var arr = [];
  for (var i = 3; i < n; i++) {
    arr.push(i)
  }
  // Return new array of numbers divisibile by 3 or 5 through filter function
  var multiple = arr.filter(function(el){
    return (el % 3 === 0 || el % 5 === 0);
  });
  // Sum all numbers through reduce function
  var result = multiple.reduce(function(sum,el){
    return sum+=el;
  },0);
  // Return result
  return result;
};

console.log(solution(10));
