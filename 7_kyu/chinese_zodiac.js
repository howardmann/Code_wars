// Given a year, return the element and animal that year represents ("Element Animal"). For example I'm born in 1998 so I'm an "Earth Tiger".
//
// animals (or $animals in Ruby) is a preloaded array containing the animals in order:
//
// ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
//
// elements (or $elements in Ruby) is a preloaded array containing the elements in order:
//
// ['Wood', 'Fire', 'Earth', 'Metal', 'Water']


// Test.assertEquals(chineseZodiac(1965), "Wood Snake")
// Test.assertEquals(chineseZodiac(1938), "Earth Tiger")
// Test.assertEquals(chineseZodiac(1998), "Earth Tiger")
// Test.assertEquals(chineseZodiac(2016), "Fire Monkey")
// Test.assertEquals(chineseZodiac(1924), "Wood Rat")
// Test.assertEquals(chineseZodiac(1968), "Earth Monkey")
// Test.assertEquals(chineseZodiac(2162), "Water Dog")


var animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

var elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
// Wood: 0 1 => 0
// Fire: 2 3 => 1
// Earth: 4 5 => 2
// Metal: 6 7 => 3
// Water: 8 9 => 4

function chineseZodiac(year){
  var diff = year - 1984;
  var animalIndex = diff % 12;
  var animal;
  (animalIndex >= 0) ? animal = animals[animalIndex] : animal = animals[animalIndex + 12];

  var element;
  var elementIndex = (diff % 2 === 0) ? (diff % 10) / 2 : (diff % 10) /2 - 0.5;
  (elementIndex >= 0) ? element = elements[elementIndex] : element = elements[elementIndex + 5];

  return `${element} ${animal}`;
}

console.log(chineseZodiac(1965));
console.log(chineseZodiac(1938));
console.log(chineseZodiac(1998));
console.log(chineseZodiac(2016));
console.log(chineseZodiac(1924));
console.log(chineseZodiac(1968));
console.log(chineseZodiac(2162));
console.log(chineseZodiac(1924));
