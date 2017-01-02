var expect = require('chai').expect;
var capitals = require('../7_kyu/find_the_capitals.js').capitals;

describe('Mocha', function(){
  it('should load npm modules', function(){
    expect(true).to.be.ok;
  });
});

describe('capitals', function(){

  it('should return an array', function(){
    expect(capitals('CodEWaRs')).to.be.a('array');
  });

  it("capitals('CodEWaRs') should equal [0,3,4,6]", function(){
    expect(capitals('CodEWaRs')).to.eql([0,3,4,6]);
  });


});
