// var marks = [45, 45, 10, 20];

// var sum = 0; 

// for (let i = 0; i < marks.length; i++) { 
//   var element = marks[i];
//   sum = sum + element; // ekane bar bar index er shathe total + hoche
// }

// console.log("total", sum);


function total(classTen) {
  var sum = 0; 

for (let i = 0; i < classTen.length; i++) { 
  var element = classTen[i];
  sum = sum + element; // ekane bar bar index er shathe total + hoche
}
  return sum
}
var classTen =[10, 20, 30, 40];
var result =total(classTen);
console.log(result);
