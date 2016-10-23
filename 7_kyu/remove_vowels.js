var disemvowel = function(str) {
  var vowel = "aeiouAEIOU";
  var arr = str.split('');
  var newArr = [];

  for ( var i = 0; i < arr.length; i ++ ) {
    if ( vowel.includes(arr[i]) === false ) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join('');
};

console.log(disemvowel('This website is for losers LOL!'));
