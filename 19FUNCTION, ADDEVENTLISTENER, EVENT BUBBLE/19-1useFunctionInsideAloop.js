var num = [1, 2, 3, 4];

// for (let i = 0; i < num.length; i++) {
//   const element = num[i];
//   if (element % 2 == 0) {
//     console.log(element, 'it is event number');
//   }
//   else{
//     console.log(element, 'is it odd number');
//   }
// }


function evenOrOdd(num) {
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element % 2 == 0) {
      console.log(element, 'it is event number');
    }
    else{
      console.log(element, 'is it odd number');
    }
  }
  
}


// var akash =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// evenOrOdd(akash);///aikhan function call kora holo o

var evenNum = [2, 4, 6, 8, 10, 12, 14, 16];
evenOrOdd(evenNum);


var oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17,];
evenOrOdd(oddNum);