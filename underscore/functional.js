var _ = require('underscore');
// Functional JavaScript

// ........................
// First-class functions: similar to primitive datatypes such as strings, numbers and booleans, functions can be passed around as values, stored in variables, stored as properties and can be passed around as arguments and return other functions (the last two represent higher-order functions)

var num = 2; // A number can be saved as a value in a variable
var fun = function(){
  return 'fun'
};  // A function can similar be saved as a value in a variable

// Higher-order functions: functions can be passed in as arguments

var arr = [1,2,3,4,5];

var double = function(num){
  return num * 2;
};

// .map is considered a higher order function as it takes another function as an argument in this case double
var result = arr.map(double);
console.log(result);  // => [2,4,6,8,10]

// same example using underscore.js _.map method
var _result = _.map(arr, double);
console.log(_result); // => [2,4,6,8,10]

// Another example using the filter method for an array of objects
var animals = [
  {name: "fluffy", species: 'dog'},
  {name: "woofie", species: 'dog'},
  {name: "sniffles", species: 'cat'},
  {name: "larry", species: 'bird'},
  {name: "rex", species: 'dog'},
];

// Predicate method return true if animal is dog
var isDog = function(animal) {
  return animal.species === 'dog';
};

// Filter is a higher order function which accepts a predicate method as an argument
var dogs = animals.filter(isDog);
console.log(dogs);

// Same example using underscore.js _.filter method
var _dogs = _.filter(dogs, isDog);
console.log(_dogs);

// ........................
// Principle of functional programming is composability

// Write a simple higher-order function which repeats a value x times
var repeats = function(times,value){
  // .apply method is a JS quirk which treates undefined as actual elements in Array
  return Array.apply(null, Array(times)).map(function(){return value});
};
console.log(repeats(4,"WAT"));

// Same example using underscore.js _.range method
var _repeats = function(times,value){
  return _.map(_.range(times), function(){return value});
};
console.log(_repeats(4,"WAT"));

// USE FUNCTIONS NOT VALUES AS ARGUMENTS
// However a beter way to write this in a functional way is to accept a function for the second argument
var _repeatedly = function(times,fun){
  return _.map(_.range(times),fun);
};

var _result = _repeatedly(3, function(){
  return 'WOWZA';
});
console.log(_result);

// Our _repeatedly function is now composible and we can pass in different functions as arguments
var _holy = _repeatedly(3, function(){
  return "HOLY";
});
console.log(_holy);

var _triple = _repeatedly(3, function(el){
  return el*3;
});
console.log(_triple);

// ........................
console.log('\nCURRYING..................');

// Currying refers to functions which return other functions
// Example of a rightToLeft curry vs leftToRight

var leftCurryDiv = function(n){
  return function(d){
    return n/d;
  };
};

var divide10by = leftCurryDiv(10);
console.log(divide10by(2));

// Michael Fogus prefers rightCurryDivs
var rightCurryDiv = function(d){
  return function(n){
    return n/d;
  };
};

var divideBy10 = rightCurryDiv(10);
console.log(divide10by(2));



// Curry functions: function which takes a function as a first paramater and then returns another function which awaits a paramater
// Currying 1 level deep
var curry = function(fun){
  return function(arg){
    return fun(arg);
  };
};

var divBy2 = function(arg){
  return arg / 2;
};
console.log(curry(divBy2)(10));

var multiplyBy2 = function(arg){
  return arg * 2;
};
console.log(curry(multiplyBy2)(10));

// Currying 2 levels deep
var curry2 = function(fun){
  return function(secondArg){
    return function(firstArg){
      return fun(firstArg, secondArg);
    }
  };
};

var div = function(n, d){
  return n/ d;
};

var divideBy2 = curry2(div)(2);
console.log(divideBy2(10));

var multiply = function(a,b){
  return a * b;
};

var multiplyBy2 = curry2(multiply)(2);
console.log(multiplyBy2(10));

// ........................
console.log('\nRECURSION..................');

// Recursive functions are functions that call themselves until they don't (usually due to condition)

// Using a loop
for (var i = 10; i > 0; i--){
  console.log(i);
}

// Using recursion
var countDown = function(num){
  if (num === 0) { return; }
  console.log(num);
  num -= 1;
  countDown(num);
};

countDown(10);
