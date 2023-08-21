function reverseString(str) {
  var reverse =""; //aita nuya holo khaly ekta patro hisabe
  
  for (let i = 0; i < str.length; i++) {
    var element = str[i];
    reverse =element + reverse //ekhane element rever er age + korar karon ulte gelo
    // reverse =reverse + element //r jode rever age + hoi elemen pore thake tahole kiso change hobe na ba ultabe na
  }
  return reverse
}

var sentench = "I know who are you"

var forAlin = reverseString(sentench);

console.log(forAlin);

var number = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var forMan =reverseString(number);

console.log(forMan);