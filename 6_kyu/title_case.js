var titleCase = function(title, minor) {
  var titleArr = title.split(' ').map(el => el.toLowerCase());
  if (minor) { var minorArr = minor.split(' ').map(el => el.toLowerCase()); }

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

module.exports = {titleCase};
