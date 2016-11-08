// To participate in a prize draw each one gives his/her firstname.
//
// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.
//
// The length of the firstname is added to the sum of these ranks hence a number n. An array of random weights is linked to the firstnames and each n is multiplied by its corresponding weight to get what they call a winning number.


// Test.assertEquals(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
// Test.assertEquals(rank("Lagon,Lily", [1, 5], 2), "Lagon")
// Test.assertEquals(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
// Test.assertEquals(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")


var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function rank(st, we, n){
  if (st === "") {return "No participants";};
  if (n > we.length) {return "Not enough participants";};

  var scoreArr = st.split(',').map(function(name, index){
    var length = name.length;
    var letterArr = name.split('').map(el => letters.indexOf(el.toUpperCase()) + 1);
    return [(length + letterArr.reduce((sum,el) => sum += el)) * we[index],name];
  });

  // Sort alphabetically then sort by score
  var scoreArrSort = scoreArr.sort((a,b) => a[1] < b[1]).sort((a,b)=> b[0] - a[0]);

  return scoreArrSort[n-1][1];
}

console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4));
console.log(rank("Lagon,Lily", [1, 5], 2));
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6));
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8));
console.log(rank("Abigail,Joshua,Ava,Olivia,Michael,Matthew,William,Sofia,Robert,Mia,Emma,Alexander,Jayden,Benjamin,Lagon,Aubrey,Logan", [3,2,3,1,6,3,5,1,2,1,1,1,6,2,3,5,4], 8));
console.log(rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH",[1, 4, 4, 5, 2, 1], 4));
console.log(rank("Chloe,Andrew,Ella,Robert,Addison,Elijah,Natalie,Matthew,Lily,Olivia,Alexander,Ava,Ethan,Naoh,Emma,Sofia,James,Daniel,Elizabeth,Mason,Joshua", [6,3,3,3,5,5,3,5,1,2,4,3,6,2,3,1,6,4,4,1,3], 6));
