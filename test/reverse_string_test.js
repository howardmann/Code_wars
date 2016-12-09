var expect = require('chai').expect;
var spinWords = require('../6_kyu/reverse_string.js').spinWords;

describe('Mocha', function(){
  it('should load mocha', function(){
    expect(true).to.be.ok;
  });
});

describe('spinWords', function(){
  it('should return a string', function(){
    var word = "hello";
    expect(spinWords(word)).to.be.a('string');
  });

  it('should only reverse words with greater than 4 characters', function(){
    var sentence = "Hey fellow warriors";
    var sentence2 = "This is a test";
    var sentence3 = "This is another test";

    expect(spinWords(sentence)).to.equal("Hey wollef sroirraw");
    expect(spinWords(sentence2)).to.equal("This is a test");
    expect(spinWords(sentence3)).to.equal("This is rehtona test");
  });

});
