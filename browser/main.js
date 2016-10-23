var _ = require('underscore');
// UNDERSCORE METHODS

// SIMPLE VALUE ARRAYS

var arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr);

// _.map
var double = _.map(arr, (el) => {
  return el * 2
});
console.log(double); // => [0, 2, 4, 6, 8, 10, 12]

// _.reduce
var total = _.reduce(arr, (a, b) => {
  return a + b
});
console.log(total); // => 21

// _.filter
var even = _.filter(arr, (el) => {
  return el % 2 === 0
});
console.log(even); // => [0, 2, 4, 6]

// _.reduce
var minusLR = _.reduce(arr, (a, b) => {
  return a - b
});
console.log(minusLR); // => -21

// _.reduceRight
var minusRL = _.reduceRight(arr, (a, b) => {
  return a - b
});
console.log(minusRL); // => -9

// _.find (returns the first element that passes the pred method)
var firstOdd = _.find(arr, (el) => {
  return el % 2 !== 0
});
console.log(firstOdd); // => 1

// _.sample
var sample3 = _.sample(arr,3);
console.log(sample3);


// OBJECT ARRAYS
var school = [{
  name: "Howie",
  age: "21",
  sex: "M"
}, {
  name: "Abe",
  age: "30",
  sex: "M"
}, {
  name: "Beth",
  age: "15",
  sex: "F"
}, {
  name: "Jane",
  age: "60",
  sex: "F"
}, {
  name: "Polly",
  age: "45",
  sex: "F"
}];
console.log(school);

// _.filter
var old = _.filter(school, el => parseInt(el.age) > 30);
console.log(old);

// _.where
var male = _.where(school, {sex: "M"});
console.log(male);

// _.pluck
var names = _.pluck(school, 'name');
console.log(names);

// _.pick
var firstPerson = _.pick(school[0], 'name', 'age');
console.log(firstPerson);

// _.groupBy
var groupBySex = _.groupBy(school,'sex');
console.log(groupBySex);

// _.chain [HM note: very useful, remember to end with .value()]
var sortSchool = _.chain(school)
                  .where({sex: "F"})
                  .filter(el => parseInt(el.age) > 30)
                  .pluck('name')
                  .value();

console.log(sortSchool);
