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
