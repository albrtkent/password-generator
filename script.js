<<<<<<< HEAD
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let passwordEl = document.querySelector(".passwordEl");
let passLength = document.getElementById("passLength");
let errorMessage = document.getElementById("message");



function generatePass() {
  password1.value = '';
  password2.value = '';
  const passLengthValue = parseInt(passLength.value);
  errorMessage.textContent = '';

  if( passLengthValue > 16 || passLengthValue < 8 ) {
    errorMessage.textContent = 'Enter number from 8-16';
  } else if ( isNaN(passLengthValue) ) {
    errorMessage.textContent = 'Input a number';
  } else {
      for( let i = 0; i < passLength.value; i++ ){
        let pass1Index = Math.floor(Math.random() * characters.length);
        let pass2Index = Math.floor(Math.random() * characters.length);
        
        password1.value += characters[pass1Index];
        password2.value += characters[pass2Index];
      }
  }
  passLength.value = '';
}

function copy() {
  navigator.clipboard.writeText(passwordEl.value).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
=======
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passLength = 15;

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function generatePass() {
  password1.value = '';
  password2.value = '';
  for( let i = 0; i < passLength; i++ ){
      let pass1Index = Math.floor(Math.random() * characters.length);
      let pass2Index = Math.floor(Math.random() * characters.length);
      
      password1.value += characters[pass1Index];
      password2.value += characters[pass2Index];
    }
}
>>>>>>> 7298ae6f7d592875035bd0575e2c733b99806245
