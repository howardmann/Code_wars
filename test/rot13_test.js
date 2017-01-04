var expect = require('chai').expect;
var should = require('chai').should();
var rot13 = require('../5_kyu/rot13.js').rot13;

describe('Mocha', function(){
  it('should load npm modules', function(){
    expect(true).to.be.ok;
  });
});

describe('rot13', function(){
  it('rot13(grfg) should return test', function(){
    expect(rot13('grfg')).to.equal('test');
  });

  it('rot13(Grfg) should return test', function(){
    expect(rot13('Grfg')).to.equal('Test');
  });

  it('rot13(2!GrFg) should return 2!test', function(){
    expect(rot13('2!GrFg')).to.equal('2!test');
  });
});
