// ekhane % dara vah ses 0 thake true if kaj korse , r vag ses kono sonkha thakle flase else kaj korse.

// const year = 3004;
// let remainder = year % 4;
// // console.log(remainder);
// if(remainder == 0){
//   console.log("yes it's Leep Year");
// }

// else{
//   console.log("No it's Not a Leep Year");
// }


// function isLeapYear(year){
//   const remainder = year % 4;
//   if (remainder == 0){
//       return true;
//   }
//   else{
//     return false;
//   }
// }


// const leapyear = isLeapYear(2005);
// console.log(leapyear);



function isLeapYear(year) {
  if (year % 4 != 0) {
    return false;
  } else if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else {
    return true;
  }
}

const chakeLeapYear= isLeapYear(1700);
console.log(chakeLeapYear);