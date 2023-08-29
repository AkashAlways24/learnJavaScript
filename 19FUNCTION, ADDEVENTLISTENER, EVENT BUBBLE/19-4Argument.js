function addNumbers(a, b) {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) { //aikhane array karone sob data gula add hosssa
    var num = arguments[i];
    sum = sum + num;
  }
  return sum
}

var result = addNumbers(3, 5, 9, 5, 8);
console.log(result);
