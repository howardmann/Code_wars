// Convert rgb to hexadecimal

var toHex = function(num){
  (num > 255) ? num = 255: num;

  var converted = num.toString(16).toUpperCase();

  if (converted.length < 2){
    return [0,converted].join('');
  } else {
    return converted;
  }
  // Sugar
  // return (converted.length < 2) ? [0,converted].join('') : converted;
};

var rgb = function(a, b, c) {
  return toHex(a) + toHex(b) + toHex(c);
};

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));

// Convert hex to rgb
// hexStringToRGB("#FF9933"), {r:255, g:153, b:51}
var hexStringToRGB = function(str){
  var matched = str.match(/(\w{2})/g);
  return {
    r: parseInt(matched[0], 16),
    g: parseInt(matched[1], 16),
    b: parseInt(matched[2], 16)
  };
};

console.log(hexStringToRGB("#FF9933"));
