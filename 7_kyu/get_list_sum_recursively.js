// Write funcion sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

// Test.assertEquals(sumR([]), 0);
// Test.assertEquals(sumR([1]), 1);
// Test.assertEquals(sumR([1,1,1]), 3);

// Sum of list recursively
function sumR(x) {
  if (x.length === 0){
    return 0;
  } else {
    return x.shift() + sumR(x);
  }
}


// console.log(sumR([1,1,1,1]));

// Length of list recursively
function lenR(x){
  if (x.length === 0) {
    return 0;
  } else {
    var result = 1 + lenR(x.slice(1));
    console.log(result,"+ next return");
    return result;
  }
}
console.log(lenR([1,1,1]));

// This is a bit tricky
// HM NOTE: On the final iterationwe call the function again and this time it as length of zero so it returns 0, then going back to the previous return figure we add 0 to the last result
