// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                       // and 4 has only one digit
//
// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                        // 1*2*6 = 12, and finally 1*2 = 2
//
// persistence(4) === 0 // because 4 is already a one-digit number

var count = 0;

function persistence(num) {
  if (num.toString().length > 1) {
    count++;
    var numArr = num.toString().split('').map(function(el){return parseInt(el);});

    var total = numArr.reduce(function(a,b){
      return a * b;
    },1);
    var length = total.toString().length;

    if (length > 1) {
      persistence(total);
    }
    return count;
  } else {
    return 0;
  }
};

console.log(persistence(999));
