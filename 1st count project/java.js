let counter = document.querySelector('.counter');
let count = 1;

setInterval(() => {
  if (count<99){
    count++; counter.innerText=count;
  }
}, 80);