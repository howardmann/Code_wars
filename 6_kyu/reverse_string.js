// # spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// # spinWords( "This is a test") => returns "This is a test"
// # spinWords( "This is another test" )=> returns "This is rehtona test"

var spinWords = function(str) {
  var strArr = str.split(' ');
  return strArr.map(function(word) {
    if (word.length > 4) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');;
};

module.exports = {spinWords};
