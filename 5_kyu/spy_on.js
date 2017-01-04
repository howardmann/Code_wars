var spyOn = function(fun) {
  var counter = 0;
  var all = [];
  var val;

  var spy = function(...args) {
    counter++;
    all.push(...args);
    val = fun.apply(this, args);
    return val;
  };

  spy.callCount = function(){
    return counter;
  };
  return spy;
};

module.exports = {spyOn};
