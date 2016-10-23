// Find the sum of all numbers up to and including summation(10)
// Map
var summation = function(num) {
  var arr = [];
  for (var i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr.reduce(function(sum,i){
    return sum + i;
  },0);
};

console.log(summation(5));
