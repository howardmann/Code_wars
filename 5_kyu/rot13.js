var rot13 = function(message) {
  const ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var msgArr = message.split('');

  var newArr =  msgArr.map(function(letter){
    // Return if non alphabetic
    if(ALPHABET.indexOf(letter.toLowerCase()) == -1) {return letter;}
    // Find index position
    var position = ALPHABET.indexOf(letter.toLowerCase()) + 13;
    if (position >= 26) { position -= 26; }
    // If letter is capital return capital version otherwise lowercase
    if (letter === letter.toUpperCase()){
      return ALPHABET[position].toUpperCase();
    } else {
      return ALPHABET[position];
    }
  });
  return newArr.join('');
};

module.exports = {rot13};

// console.log(rot13('grfg'));
console.log(rot13('n'));
// console.log(rot13('2!GrFg'));
console.log(rot13('n5mupvi97vb10lxiggb9'));
// a5zhciv97io10ykvtto9
