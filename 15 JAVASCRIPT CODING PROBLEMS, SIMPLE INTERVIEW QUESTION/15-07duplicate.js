///var names = [2, 4, 5, 2, 5, 7];

// var names = ["akash", "sagor", "Akash", "akash", "Sagor"]; //aita cashe sestive
var uniqueName = [];

for (let i = 0; i < names.length; i++) {
  var element = names[i];

  var index = uniqueName.indexOf(element);
  
  if (index == -1) {
    uniqueName.push(element)
  }

}

console.log(uniqueName);