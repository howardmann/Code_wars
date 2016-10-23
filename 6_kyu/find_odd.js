var findOdd = function(A) {
  var count = 0;
  for ( var i = 0; i < A.length; i++ ) {
    for (var j = 0; j < A.length; j++) {
      if (A[j] === A[i]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return A[i];
    } else {
      count = 0;
    }
  }
};

// console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));

// Code Wars solution

var odd = function(arr) {
  var obj = {};

  for ( var i = 0; i < arr.length; i+=1 ) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  // arr.forEach(function(el){
  //   if (obj[el]) {
  //     obj[el] += 1;
  //   } else {
  //     obj[el] = 1;
  //   }
  // });

  for (var prop in obj) {
    if ( obj[prop]%2 !== 0 ) {
      return parseInt(prop);
    }
  }
};

console.log(odd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));
