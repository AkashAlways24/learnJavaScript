var speech = "I am a good person. i don't snore at night."
var count = 0;

for (let i = 0; i < speech.length; i++) {
  var element = speech[i];
  if (element == " ") ///commen vabe ja dubbel spech dorte pare na
  // if(element == " " && speech[i-1] !=" ") // aita dara dubbel spech dhorte pare
  {
    count++
  }
  
}

console.log(count);
