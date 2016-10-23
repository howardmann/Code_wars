// Numbers Square

var numbers = {
  values: [1,2,3,4,5],
  square: function(){
    return this.values.map(function(el){
      return Math.pow(el,2);
    });
  },
  cube: function(){
    return this.values.map(function(el){
      return Math.pow(el,3);
    });
  }
};

console.log(numbers.values);
console.log(numbers.square());
console.log(numbers.cube());
