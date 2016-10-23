// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15

var add = function(n) {
  var f = function(x) {
    return add(n + x);
  };
  f.valueOf = function(){
    return n;
  };
  return f;
};

var two = add(1)(2);
console.log(add(1)(2)(3)(4));
