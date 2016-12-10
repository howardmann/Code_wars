var expect = require('chai').expect;
var iqTest = require('../6_kyu/iq_test.js').iqTest;

describe('Mocha', function(){
  it('should load npm modules', function(){
    expect(true).to.be.ok;
  });
});

describe('iqTest', function(){
  var oddStr = '2 4 7 8 10';
  var evenStr = '1 2 1 1';
  var errStr = '1 2 2 1 1';

  it('should return a number', function(){
    expect(iqTest(oddStr)).to.be.a('number');
  });

  it('should return the position of the single odd number', function(){
    expect(iqTest(oddStr)).to.be.equal(3);
  });

  it('should return the position of the single even number', function(){
    expect(iqTest(evenStr)).to.be.equal(2);
  });

  it('should throw exception if no single even or odd number', function(){
    expect(iqTest(errStr)).to.be.equal('No single odd one out');
  });


});
