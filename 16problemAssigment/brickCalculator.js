
function brickCalculator(flors) {

var bricks=0;

if (flors<=10) {
  var bricks = flors * 15000;
}

else if (flors <= 20) {
  var fastPart = 10 * 15000;
  var remining = flors - 10;
  var secondPart = remining * 12000;
  var bricks= fastPart + secondPart;
}

else{
  var fastPart = 10* 15000;
  var secondPart = 10 * 12000;
  var remining = flors - 20;
  var thirdPart = remining * 10000;
  var bricks = fastPart + secondPart + thirdPart;
}
  return bricks;
  
};

var kotoTala= brickCalculator(22);

console.log("it lagbe", kotoTala);//problem solving