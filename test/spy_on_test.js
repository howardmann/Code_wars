var expect = require('chai').expect;
var should = require('chai').should();
var spyOn = require('../5_kyu/spy_on.js').spyOn;

describe('Mocha', function(){
  it('should load npm modules', function(){
    expect(true).to.be.ok;
  });
});

describe('spyOn(adder)', function(){
  var adder = function(n1, n2) { return n1 + n2; }
  var adderSpy = spyOn(adder);

  it('adderSpy(2, 4) should return 6', function(){
    expect(adderSpy(2,4)).to.equal(6);
  });

  it('adderSpy(3, 5) should return 8', function(){
    adderSpy(3,5).should.equal(8);
  });

  it('adderSpy(2, 2) should return 4', function(){
    adderSpy(2,2).should.equal(4);
  });

  it('adderSpy.callCount() should return 3', function(){
    adderSpy.callCount().should.equal(3);
  });

});
