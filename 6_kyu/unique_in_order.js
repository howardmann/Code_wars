var uniqueInOrder = function(iterable){
  if (Array.isArray(iterable)) {
    var arr = iterable;
  } else {
    var arr = iterable.split('');
  }

  return arr.filter(function(el, index) {
    return el !== arr[index - 1];
  });

};
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

module.exports = {uniqueInOrder};
