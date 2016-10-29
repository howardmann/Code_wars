// Your task is to create a function that can take any string and randomly jumble the letters within each word while leaving the first and last letters of the word in place.
//
//
// All punctuation should remain in place
// Words smaller than 3 letters should not change
// Letters must be randomly moved (and so calling the function multiple times with the same string should return different values
// Parameters that are not strings should return undefined
// The tests do the following things to ensure a valid string is returned:
//
// Check that the string returned is not equal to the string passed (you may have to revalidate the solution if your function randomly returns the same string)
// Check that first and last letters of words remain in place
// Check that punctuation remains in place
// Checks string length remains the same
// Checks the function returns undefined for non-strings
// Checks that word interiors (the letters between the first and last) maintain the same letters, albeit in a different order
// Checks that letters are randomly assigned.

// Test.assertEquals(mixwords('hello').length, 5);
// Test.assertEquals(mixwords('hello')[0],'h');
// Test.assertEquals(mixwords('hello')[4],'o');
// Test.assertNotEquals(mixwords('hello'), 'hello');
//
// Test.assertEquals(mixwords('hey there, friends!').length, 19);
// Test.assertEquals(mixwords('hey there, friends!')[0],'h');
// Test.assertEquals(mixwords('hey there, friends!')[4],'t');
// Test.assertEquals(mixwords('hey there, friends!')[8],'e');
// Test.assertEquals(mixwords('hey there, friends!')[18],'!');
// Test.assertNotEquals(mixwords('hey there, friends!', 'hey there, friends'));
//
// Test.assertEquals(mixwords(23),undefined);
// Test.assertEquals(mixwords(true),undefined);
// Test.assertEquals(mixwords('hi'),'hi');

// mixwords('Winter is coming') // returns 'Wntier is cminog' or 'Wtiner is conimg'
// mixwords('Hey, friends!') // returns 'Hey, fierdns!' or 'Hey, fernids!'


// Using recursion
var jumbleArr = function(arr){
  if (arr.length === 0){return '';};
  return (arr.splice(Math.floor(Math.random() * (arr.length)), 1)) + jumbleArr(arr);
};

var jumbleWordMid = function(word){
  var wordMidArr = word.split('').slice(1,word.length - 1);
  return word[0] + jumbleArr(wordMidArr) + word[word.length - 1];
};

var mixwords = function(str){
  if (typeof str !== 'string') { return undefined; };

  var wordArr = str.split(/([^a-zA-Z])/);
  return wordArr.map(el=>{
    if (/[a-zA-Z]/.test(el)){
      return jumbleWordMid(el);
    } else {
      return el;
    }
  }).join('');
};

console.log(mixwords('Winter is coming'));
console.log(mixwords('hey there, friends!'));
console.log(mixwords('hello pippi!'));
