
  document.getElementById('myBTN')
  .addEventListener('click', function(even){
    var itmeParent = document.getElementById('myList');
    var newItme = document.createElement('li');
    newItme.innerText = 'Brand New';
    itmeParent.appendChild(newItme);
  });
  
  document.getElementById('myList')
  .addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
  });