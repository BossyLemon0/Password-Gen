// Assignment Code

var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCharacters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
var specialCharacters = '?><!@#$%^&*()_+?><!@#$%^&*()_+?><!@#$%^&*()_+?><!@#$%^&*()_+?><!@#$%^&*()_+?><!@#$%^&*()_+?><!@#$%^&*()_+?><!@#$%^&*()_+?><!@#$%^&*()_+?><!@#$%^&*()_+';
var numericCharacters = '0123456789012345678901234567890123456789012345678912345678901234567890123456789012345678901234567891234567890123456789012345678901234567890123456789';
var combinedCharacters = ""



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function getPassLength() {
//   var passLength = prompt("PLEASE SELECT A PASSWORD LENGTH FROM 8 - 128");
//   return passLength
// }


function writePassword() {
var numeric = confirm("WOULD YOU LIKE NUMERIC NUMBERS IN YOUR PASSWORD?");
var upper = confirm("WOULD YOU LIKE UPPERCASE NUMBERS IN YOUR PASSWORD?");
var lower = confirm("WOULD YOU LIKE LOWERCASE NUMBERS IN YOUR PASSWORD?");
var special = confirm("WOULD YOU LIKE SPECIAL CHARACTERS IN YOUR PASSWORD?");
var passLength = prompt("PLEASE SELECT A PASSWORD LENGTH FROM 8 - 128");
window.value = passLength;

if (upper === true){
  combinedCharacters += upperCharacters
}
if (lower === true) {
  combinedCharacters += lowerCharacters
}
if (numeric === true) {
  combinedCharacters += numericCharacters
}
if (special === true) {
  combinedCharacters += specialCharacters
}
if (passLength < 8 || passLength > 128) {
  alert("PLEASE PICK A LENGTH BETWEEN 8 AND 128")
  acceptable = false
}
// for some reason this will not work. it is supposed to stop the user from inputing characters other than integers, but it never returns the right value for some reason.
// if(Number.isInteger(passLength)){
//   console.log(Number.isInteger(passLength))
//   alert("PLEASE SELECT A NUMBER")
//   acceptable = false
// }
if (upper === false && lower === false && numeric === false && special === false){
  alert("PLEASE SELECT AT LEAST ONE CRITERIA")
  acceptable = false
}

console.log(acceptable)
// console.log(randomizePassword())
var password = showFinalResult();
  var passwordText = document.querySelector("#password");
  combinedCharacters = "";
  result = "";
//generatePassword
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// function updateCombinedCharacters() {
//   if (upper === true){
//     combinedCharacters += upperCharacters
//   }
//   if (lower === true) {
//     combinedCharacters += lowerCharacters
//   }
//   if (numeric === true) {
//     combinedCharacters += numericCharacters
//   }
//   if (special === true) {
//     combinedCharacters += specialCharacters
//   }
//   if (passLength < 8 || passLength > 128) {
//     alert("PLEASE PICK A LENGTH BETWEEN 8 AND 128")
//     acceptable = false
//   }
//   // for some reason this will not work. it is supposed to stop the user from inputing characters other than integers, but it never returns the right value for some reason.
//   // if(Number.isInteger(passLength)){
//   //   console.log(Number.isInteger(passLength))
//   //   alert("PLEASE SELECT A NUMBER")
//   //   acceptable = false
//   // }
//   if (upper === false && lower === false && numeric === false && special === false){
//     alert("PLEASE SELECT AT LEAST ONE CRITERIA")
//     acceptable = false
//   }
// }

var acceptable = true;

function randomizePassword(length) {
  console.log(combinedCharacters)
  var result = '';
    var charactersLength = combinedCharacters.length;
    for ( var i = 0; i < length; i++ ) {
      result += combinedCharacters.charAt(Math.floor(Math.random() *
 charactersLength));
 console.log("this is the result", result)
   }
   return result;
  
}

function showFinalResult() {
  if (acceptable === true) {
    finalResult = randomizePassword(window.value);
    console.log(finalResult)
    alert("ENJOY YOUR PASSWORD")
    return finalResult;
  } else {
    alert("PLEASE START AGAIN")
    acceptable = true
  }
}








// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// var array = [1,2,3]
// console.log(array.map(x=>x*10));




