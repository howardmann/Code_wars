var iqTest = function(str) {
  var strArr = str.split(' ');
  var evenArr = strArr.filter(el => el % 2 == 0);
  var oddArr = strArr.filter(el => el % 2 != 0);

  if (evenArr.length === 1) {
    return strArr.indexOf(evenArr[0]) + 1;
  } else if (oddArr.length === 1) {
    return strArr.indexOf(oddArr[0]) + 1;
  } else {
    return 'No single odd one out';
  }
};

module.exports = {iqTest};
