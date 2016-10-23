var findEvenIndex = function(arr) {
  for (var i = 1; i < arr.length - 1; i++){
    var leftSum = arr.slice(0,i).reduce((sum,el)=>{return sum+=el});
    var rightSum = arr.slice((i+1), arr.length).reduce((sum,el)=>{return sum+=el});
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

var arr = [1,2,3,4,3,2,1];

console.log(findEvenIndex(arr));
