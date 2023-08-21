var marks = [45, 81, 63, 98, 56, 33, 12, 120];

var max = marks[0]; //index er position men korlo

for (let i = 0; i < marks.length; i++) { //marks er length er onujaiyi jabe
  var element = marks[i];
  if (element > max) {
    max = element;
  }
}

console.log("ha aita boro sob che", max);