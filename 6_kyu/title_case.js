var titleCase = function(title, minor) {
  var titleArr = title.split(' ').map(el => el.toLowerCase());
  if (minor) {
    var minorArr = minor.split(' ').map(el => el.toLowerCase());
  }

  var titleizeWord = function(word) {
    return word[0].toUpperCase() + word.substr(1);
  };

  return titleArr.map(function(word, index){
    if (index !== 0 && minorArr && minorArr.includes(word)) {
      return word;
    } else {
      return titleizeWord(word);
    }
  }).join(' ');

};

console.log(titleCase('clash'));
console.log(titleCase('CLASH'));
console.log(titleCase('Clash of Kings', 'a'));
console.log(titleCase('Clash of Kings', 'of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));



module.exports = {titleCase};

// def title_case(title, *minor_words)
//   array = title.downcase.split(' ')
//   minor = minor_words.join(' ').downcase
//
//   array.each_index do |i|
//     unless minor.include?(array[i])
//       array[i].capitalize!
//     end
//   end
//   array[0].capitalize!
//   # array.map! do |el|
//   #   unless minor.include?(el)
//   #     el.capitalize
//   #   else
//   #     el.downcase
//   #   end
//   # end
//   # array[0].capitalize!
//   p array.join(' ')
//
// end
//
// title_case('a clash of KINGS', 'a an the of')
// title_case('THE WIND IN THE WILLOWS', 'The In')
// title_case('the quick brown fox')
