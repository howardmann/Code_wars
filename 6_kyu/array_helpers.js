// Numbers Square
var square = (el) => Math.pow(el,2);
var cube = (el) => Math.pow(el,3);
var isEven = (el) => (el % 2 === 0) ? true : false;
var isOdd = (el) => (el % 2 !== 0) ? true : false;

Array.prototype.square = function(){
  return this.map(square);
};

Array.prototype.cube = function(){
  return this.map(cube);
};

Array.prototype.sum = function(){
  if (this.length === 0) {return 0;}
  return this.reduce((sum,el)=>sum+=el);
};

Array.prototype.average = function(){
  return this.sum() / this.length;
};

Array.prototype.even = function(){
  return this.filter(isEven);
};

Array.prototype.odd = function(){
  return this.filter(isOdd);
};

var numbers = [1,2,3,4,5];
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.sum());
console.log(numbers.average());
console.log(numbers.even());
console.log(numbers.odd());
var empty = [];
console.log(empty.sum());
console.log(empty.average());
