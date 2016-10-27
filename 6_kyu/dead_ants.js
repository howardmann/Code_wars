// Test.assertEquals(deadAntCount("ant ant ant ant"), 0, "Nope")
// Test.assertEquals(deadAntCount(null), 0, "Nope")
// Test.assertEquals(deadAntCount("ant anantt aantnt"), 2, "Nope")
// Test.assertEquals(deadAntCount("ant ant .... a nt"), 1, "Nope")


var deadAntCount = function(ants) {
  if (!ants) { return 0; };
  var re = /\.+|(ant)/g;
  var deadAnts = ants.replace(re,"").split('');
  var antArr = [
    deadAnts.filter(el=>el==="a"),
    deadAnts.filter(el=>el==="n"),
    deadAnts.filter(el=>el==="t")
  ];

  antArr.sort((a,b)=> b.length - a.length);

  var newArr = antArr[0].map(function(c, i){
    return antArr.map(function(row){
      return row[i];
    })
  })

  var deadAntsOrdered = newArr.map(el=>el.sort().join(''));
  return deadAntsOrdered.length;
};

console.log(deadAntCount("...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t"));
console.log(deadAntCount("ant ant ant ant"));
console.log(deadAntCount("ant anantt aantnt"));
console.log(deadAntCount("ant ant .... a nt"));
console.log(deadAntCount(null));
