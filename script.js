const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let passLength = document.getElementById("passLength");
let Message = document.getElementById("message");


function generatePass() {
  password1.value = '';
  password2.value = '';
  const passLengthValue = parseInt(passLength.value);
  Message.textContent = '';

  if( passLengthValue > 16 || passLengthValue < 8 ) {
    showMessage('Enter a number from 8-16', 'error');
  } else if ( isNaN(passLengthValue) ) {
    showMessage('This is not a number', 'error');
  } else {
      for( let i = 0; i < passLength.value; i++ ){
        let pass1Index = Math.floor(Math.random() * characters.length);
        let pass2Index = Math.floor(Math.random() * characters.length);
        
        password1.value += characters[pass1Index];
        password2.value += characters[pass2Index];
        showMessage('Passwords generated successfully', 'success');
      }
  }
  passLength.value = '';
}

function copyToClipboard(event) {
  const element = event.target; // Get the element that triggered the event

  if( !element.value ) {
    showMessage('The field is empty', 'error');
    return;
  }

  element.select(); // Select the text in the input field
  element.setSelectionRange(0, 99999); // For mobile devices
  
  navigator.clipboard.writeText(element.value)
  .then(() => showMessage('Password copied to clipboard', 'success'))
  .catch(err => showMessage('Failed to copy text', 'error'));
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = type; // Apply success or error styling
  message.style.opacity = '1';
  message.style.transform = 'translateY(0)';
  setTimeout(() => {
      message.style.opacity = '0';
      message.textContent = '';
      message.style.transform = 'translateY(-10px)';
  }, 3000);
}

// Add event listeners to the password input fields using class selector
document.querySelectorAll('.passwordEl').forEach(input => {
  input.addEventListener('click', copyToClipboard);
});
