function init(){
//add your javascrip between these two lines of code
/*
SELECTORS
  getElementsByTagName
  getElementById
  getElementsByClassName
  querySelectorAll
ACCESSOR
  getAttribute
MANIPULATORS
  setAttribute
  innerHTML
  style
*/
  button= document.getElementById('entrybutton');
  function displayText(){
    textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert('Michael Galvan: '+textbox.value);
  }
  button.addEventListener('click', displayText);
}


window.addEventListener('load', init);