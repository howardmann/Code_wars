var capitals = function(str) {
  // var splitArr = str.split('');
  // var result = [];
  // splitArr.forEach(function(el, i){
  //   if(el === el.toUpperCase()) {
  //     result.push(i);
  //   }
  // });
  //
  // return result;
  return str.split('').filter(el => el == el.toUpperCase()).map(el => str.indexOf(el));
};

module.exports = {capitals};

console.log(capitals('CodEWaRs'));
