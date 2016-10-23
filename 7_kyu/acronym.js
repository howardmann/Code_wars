// let tests = [
//   ["Code Wars", "CW"],
//   ["Water Closet", "WC"],
//   ["Portable Network Graphics", "PNG"],
//   ["PHP: Hypertext Preprocessor", "PHP"],
//   ["hyper text markup language", "HTML"]

// JavaScript solution
var toAcronym = function(string){
  var arr = string.toUpperCase().split(' ');
  var result = arr.map(function(el){
    return el[0];
  }).join('');
  return result;
};

// console.log(toAcronym("Code Wars"));
// console.log(toAcronym("hyper text markup language"));
// console.log(toAcronym("Water Closet"));
// console.log(toAcronym("Portable Network Graphics"));
// console.log(toAcronym("PHP: Hypertext Preprocessor"));

// Regex solution
var toAcronymRegex = function(string){
  var re = /\b[a-zA-Z]/g;
  var result = string.match(re);
  return result.join('').toUpperCase();
};

console.log(toAcronymRegex("Code Wars"));
console.log(toAcronymRegex("hyper text markup language"));
console.log(toAcronymRegex("Water Closet"));
console.log(toAcronymRegex("Portable Network Graphics"));
console.log(toAcronymRegex("PHP: Hypertext Preprocessor"));
