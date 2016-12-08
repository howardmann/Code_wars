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

Array.prototype.adder = function(num){
  return this.map(el => el + num);
};

Array.prototype.checkNum = function(num){
  if (this.indexOf(num) === -1) {
    return false;
  } else {
    return true;
  }
};

module.exports = {Array};
