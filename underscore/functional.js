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


// Custom higher order functions

// Find and replace
var findAndReplace = function(regex, replacement) {
  return function(text){
    return text.replace(regex, replacement);
  };
};

var changeJS = findAndReplace(/javascript/g, "JavaScript");
console.log(changeJS('I love javascript'));

var changeRails = findAndReplace(/rails/g, "RORO");
console.log(changeRails('I love rails'));


// Check isEven,
var mapFilter = function(fun1, fun2){
  return function(arr){
    return arr.map(fun1).filter(fun2);
  };
};

var isEven = (num) => (num % 2 === 0) ? true : false;
var double = (num) => num * 2;
var triple = (num) => num * 3;

var doubleEven = mapFilter(double, isEven);
console.log(doubleEven([1,2,3,4,5]));
var tripleEven = mapFilter(triple, isEven);
console.log(tripleEven([1,2,3,4,5]));


// ........................
// Principle of functional programming is composibility

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
  // Stop when: number is zero break out of function
  if (num === 0) { return; }
  console.log(num);
  num -= 1;
  countDown(num);
};

countDown(10);

// Another factorial example
var factorial = function(num){
  // Stop when: Terminate by returning 1 if number is less than 0;
  if (num === 0) {return 1;}
  // Take one-step (num *)
  // Smaller problem (num -1)
  return num * factorial(num -1);
};
console.log(factorial(6));

// INTRODUCTION TO FUNCTIONAL VS. IMPERATIVE AND OBJECT ORIENTED
// Let's write a function to capitalize a sentence

// Imperative method
// 1. One specific function that takes a sentence as an argument
// 2. Splits the sentence into an array and then uses a for loop to iterate through and change the element into an upper case version
// 3. Finally joins and returns
var capitalizeSentence = function(sentence){
  var arr = sentence.split(' ');
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  }
  return arr.join(' ');
};
console.log(capitalizeSentence('jack johnson'));

// Object-Oriented method
var Person = {
  name: 'first last',
  addName: function(name){
    this.name = name;
  },
  capitalize: function(){
    var textArr = this.name.split(' ');
    for (var i = 0; i < textArr.length; i++){
      textArr[i] = textArr[i][0].toUpperCase() + textArr[i].substr(1);
    }
    this.name = textArr.join('');
  }
};

var batman = Object.create(Person);
batman.addName('bruce wayne');
console.log(batman.name);

// Functional method
// 1. Create a capitalize function whose purpose is to captialize a word
// 2. Create a mapSentence function who takes a sentence and a function as arguments. It then splits the sentence into an array of words and maps through each word element in the array calling on the function that was passed in, finally it joins the array and returns the word

var capitalize = function(word){
  return word[i].toUpperCase() + word.substr(1);
};

var mapSentence = function(fun, sentence){
  return sentence.split(' ').map(fun).join(' ');
};

// Sugar
// var capitalize = (word) => word[i].toUpperCase() + word.substr(1);
// var mapSentence = (fun, sentence) => sentence.split(' ').map(fun).join(' ');

console.log(capitalize("howie"));
console.log(capitalize("mann"));
console.log(mapSentence(capitalize, 'howie mann'));
