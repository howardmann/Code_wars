// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51

// Test.assertEquals(numberToPrice(1500.129),   '1,500.12');
// Test.assertEquals(numberToPrice(-5),         '-5.00');
// Test.assertEquals(numberToPrice(1000000.5),  '1,000,000.50');
// Test.assertEquals(numberToPrice('@'),        'NaN');

var numberToPrice = function(number) {
  if (typeof number !== 'number') {return 'NaN';};
  var fixed = number.toFixed(3).replace(/\d$/,"");
  return fixed.replace(/\B(?=(\d{3})+(?!\d))/g,",");
};

console.log(numberToPrice(13253.5123));
console.log(numberToPrice(1500.129));
console.log(numberToPrice(-5));
console.log(numberToPrice(1000000.5));
console.log(numberToPrice('@'));
console.log(numberToPrice(100.5));
console.log(numberToPrice(200000.10));
