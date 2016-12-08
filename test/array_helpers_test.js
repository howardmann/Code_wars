var expect = require('chai').expect;

var Array = require('../6_kyu/array_helpers.js');

var numbers = [1,2,3];

describe('Mocha', function(){
  it('should run our tests using npm', function(){
    expect(true).to.equal(true);
  });
});

describe('Array.square()', function(){
  it('should return square of each value', function(){
    expect(numbers.square()).to.eql([1,4,9]);
  });
});

describe('Array.adder(num)', function(){
  it('should add the number argument to each value', function(){
    expect(numbers.adder(2)).to.eql([3,4,5]);
  });
});


describe('Array.checkNum(num)', function(){
  it('should return true if number exists in array', function(){
    expect(numbers.checkNum(1)).to.be.true;
  });

  it('should return false if number does not exist in array', function(){
    expect(numbers.checkNum(6)).to.be.false;
  });
});
