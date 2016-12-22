var expect = require('chai').expect;
var titleCase = require('../6_kyu/title_case.js').titleCase;

describe('Mocha title_case_test', function(){
  it('should load mocha', function(){
    expect(true).to.be.ok;
  });
});

describe('titleCase', function(){
  it('should return a string', function(){
    var title = "a clash of KINGS";
    var minor = "a an the of";
    expect(titleCase(title, minor)).to.be.a('string');
  });

  it('should return a titleized string for one lowercase word', function(){
    var title = "clash";
    expect(titleCase(title)).to.equal('Clash');
  });

  it('should return a titleized string for one uppercase word', function(){
    var title = "CLASH";
    expect(titleCase(title)).to.equal('Clash');
  });

  it('should return a titleized string for a sentence of words', function(){
    var title = "clash of kings";
    var minor = "a";
    expect(titleCase(title)).to.equal('Clash Of Kings');
  });

  it('should not titleize minor word exceptions', function(){
    var title = "clash of kings";
    var minor = "of";
    expect(titleCase(title, minor)).to.equal('Clash of Kings');
  });

  it('should always titleize the first word even if its a minor', function(){
    var title = "THE WIND IN THE WILLOWS";
    var minor = "The In";
    expect(titleCase(title, minor)).to.equal('The Wind in the Willows');
  });

});
