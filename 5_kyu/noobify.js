var n00bify = function(text){
  var string = text.replace(/too|to/gi, '2')
    .replace(/fore|for/gi, '4')
    .replace(/oo/gi, '00')

  var stringArr = string.split(' ');

  Array.prototype.wLOL = function() {
    if (this[0][0].toUpperCase() === 'W') {
      return ['LOL'].concat(this);
    } else {
      return this;
    }
  };

  Array.prototype.omg = function() {
    var str = this.join(' ');
    if (this[0] === 'LOL' && str.length > 32) {
      this.splice(1, 0, 'OMG');
      return this;
    } else if (str.length > 32) {
      return ['OMG'].concat(this);
    } else {
      return this;
    }
  };

  Array.prototype.caps = function() {
    if (this[0][0].toUpperCase() === 'H') {
      return this.map(word => word.toUpperCase());
    } else {
      return this.map(function(word, i){
        if ((i+1) % 2 === 0) {
          return word.toUpperCase();
        } else {
          return word;
        }
      })
    }
  };

  Array.prototype.question = function(){
    var length = this.length;
    return this.map(word => word.replace(/\?/, '?'.repeat(length)));
  };

  Array.prototype.exclamation = function() {
    var length = this.length;
    return this.map(function(word){
      if (length == 1) {
        return word;
      } else if (length % 2 == 0) {
        return word.replace(/\!/, '!1'.repeat(length/2));
      } else {
        return word.replace(/\!/, '!1'.repeat(length/2) + '!');
      }
    });
  };


  return stringArr.wLOL().omg().caps().question().exclamation().join(' ')
    .replace(/be/, 'b')
    .replace(/BE/, 'B')
    .replace(/are/, 'r')
    .replace(/ARE/, 'R')
    .replace(/you/, 'u')
    .replace(/YOU/, 'U')
    .replace(/please/, 'plz')
    .replace(/PLEASE/, 'PLZ')
    .replace(/people/, 'ppl')
    .replace(/PEOPLE/, 'PPL')
    .replace(/really/, 'rly')
    .replace(/REALLY/, 'RLY')
    .replace(/have/, 'haz')
    .replace(/HAVE/, 'HAZ')
    .replace(/know/, 'no')
    .replace(/KNOW/, 'NO')
    .replace(/s/g, 'z')
    .replace(/S/g, 'Z')
    .replace(/(\.)|(,)|(')/gi, '');

};


console.log(n00bify('for today'));
console.log(n00bify('for today n00b'));
console.log(n00bify('how for today n00b'));
console.log(n00bify('wait how for today n00b'));
console.log(n00bify('for today how many noob people are really you know be there slipper letS snake it'));
console.log(n00bify('why for today how many noob people are really you know be there slipper letS snake it'));


// Test.assertEquals(n00bify("Hi, how are you today?"), "HI HOW R U 2DAY?????");
// Test.assertEquals(n00bify("I think it would be nice if we could all get along."), "OMG I think IT would B nice IF we COULD all GET along");
// Test.assertEquals(n00bify("Let's eat, Grandma!"), "Letz EAT Grandma!1!");

console.log(n00bify('Hi, how are you today?'));
console.log(n00bify('I think it would be nice if we could all get along.'));
console.log(n00bify("Let's eat, Grandma!"));
