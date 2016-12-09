var expect = require('chai').expect;
var uniqueInOrder = require('../6_kyu/unique_in_order.js').uniqueInOrder;


describe('Mocha', function(){
  it('should run our tests using npm', function(){
    expect(true).to.equal(true);
  });
});

describe('uniqueInOrder(str)', function(){
  it('should return array of unique letters in order', function(){
    expect(uniqueInOrder('AAAABBBCCDAABBB')).to.eql(['A', 'B', 'C', 'D', 'A', 'B']);
  });

  it('should be case sensitive', function(){
    expect(uniqueInOrder('ABBCcAD')).to.eql(['A', 'B', 'C', 'c', 'A', 'D']);
  });

  it('should work with number arrays', function(){
    expect(uniqueInOrder([1,2,2,3,3])).to.eql([1,2,3]);
  });

});


// var uniqueInOrder=function(iterable){
//   //your code here - remember iterable can be a string or an array
// }
//
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
