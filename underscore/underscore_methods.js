var _ = require('underscore');
// UNDERSCORE METHODS

// SIMPLE VALUE ARRAYS
console.log("SIMPLE VALUE ARRAYS.................");

var arr = [0, 1, 2, 3, 4, 5, 6];
console.log('arr: ',arr);

console.log('\nCommon methods: ');

// _.map
var double = _.map(arr, (el) => {
  return el * 2
});
console.log('_.map:',double); // => [0, 2, 4, 6, 8, 10, 12]

// _.reduce
var total = _.reduce(arr, (a, b) => {
  return a + b
});
console.log('_.reduce: ',total); // => 21

// _.filter
var even = _.filter(arr, (el) => {
  return el % 2 === 0
});
console.log('_.filter: ', even); // => [0, 2, 4, 6]

// _.reduceRight
var minusRL = _.reduceRight(arr, (a, b) => {
  return a - b
});
console.log('_.reduceRight: ', minusRL); // => -9

// _.find (returns the first element that passes the pred method)
var firstOdd = _.find(arr, (el) => {
  return el % 2 !== 0
});
console.log('_.find: ', firstOdd); // => 1

// _.sample
var sample3 = _.sample(arr, 3);
console.log('_.sample: ', sample3);

// _.rest
var after3 = _.rest(arr,3);
console.log('_.rest: ', after3);

// _.range [Creates a range of values]
var multipleOf5 = _.range(0,100,5);
console.log('_.range(start, stop, step): ', multipleOf5);


// OBJECT ARRAYS
console.log("\nOBJECT ARRAYS.................");

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
console.log('school: \n', school);

console.log('\nCommon methods: ');

// _.filter
var old = _.filter(school, el => parseInt(el.age) > 30);
console.log('_.filter: ',old);

// _.where
var male = _.where(school, {sex: "M"});
console.log('_.where: ', male);

// _.pluck
var names = _.pluck(school, 'name');
console.log('_.pluck: ', names);

// _.pick
var firstPerson = _.pick(school[0], 'name', 'age');
console.log('_.pick: ', firstPerson);

// _.groupBy
var groupBySex = _.groupBy(school,'sex');
console.log('_.groupBy: ', groupBySex);

// _.chain [HM note: very useful, remember to end with .value()]
var sortSchool = _.chain(school)
                  .where({sex: "F"})
                  .filter(el => parseInt(el.age) > 30)
                  .pluck('name')
                  .value();

console.log('_.chain(school).where().filter().pluck().value(): ', sortSchool);
