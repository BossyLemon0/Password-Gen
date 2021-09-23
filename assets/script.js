// Assignment Code
// These variables set up the characters for the password

var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCharacters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
var specialCharacters = '?><!@#$ %^&*()_+?><!@#$%^&*()_+?><!@#$%^&* ()_+?><!@#$%^&*()_+?> < !@#$%^&*()_+?><!@#$%^&*() _+?><!@#$%^&*()_+?><!@#$%^ &*()_+?><!@ #$%^&*()_+?><! @#$%^& *()_+';
var numericCharacters = '0123456789012345678901234567890123456789012345678912345678901234567890123456789012345678901234567891234567890123456789012345678901234567890123456789';
//this variable is an empty string that will be filled with the variable above
var combinedCharacters = ""


//this selects the id generate and stores it's value into a variable

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function getPassLength() {
//   var passLength = prompt("PLEASE SELECT A PASSWORD LENGTH FROM 8 - 128");
//   return passLength
// }


/*the writePassword function stores the prompt variables, a global value for passlength,
the logic for adding the characters string into the empty string, the logic for handling the wrong 
password length (doesn't include exception for new entering anything that isn't a number), adds logic
for not putting any of the criteria, stores the password id into a variable + stores the final value
into a variable = then changes the password id to the final result on the page.
*/

function writePassword() {
var numeric = confirm("Would you like numbers in your password?");
var upper = confirm("Would you like uppercase letters in your password?");
var lower = confirm("Would you like lowercase letters in your password?");
var special = confirm("Would you like special characters in your password?");
var passLength = prompt("Please select a password length between 8 and 128");
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


//This combined characters stops the password from being completely random.
  combinedCharacters = "";

  // result literally does nothing
  result = "";

//generatePassword
//allows the password variable replace the id=password. on the html document
  passwordText.value = password;

}

/*This line of code allows the user to click the generate button which inturn calls the write password function mentioned
in the write Password comment
*/

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


//funmath
/*
the randomize password function takes the value of the ammount of characters chosen in 
writePassword PassLength variable stored in the window.value that is semi global. The function can only be called once 
variable acceptable is deemed as true after put through the if statements in the write password
function. Once the function is called by the showFinalFunction the var result is going to hold an empty string to hold the
new value(password) being constructed. The var charactersLength takes in the length value of combined characters found
in global after being added from the write password function. A for loop will iterate through the Length value passed from
window.value from show final result. the result will pick a random number by using the full combinedcharacters list and 
getting a character at the index of math.floor(math.random()*characterslenth). math.floor returns the largest interger
less than or equal to a given number, math random picks a floating-point from 0 to 1. this is then multiplied by the number
of characters within the global string. again this number will be rounded by math.floor and then added to the result string.
the iteration goes through the length chosen by the user and returns the new string on completion of loop. look to 
showfinalResult next.
*/
function randomizePassword(length) {
  console.log(combinedCharacters)
 // console.log(length)
  var result = '';
    var charactersLength = combinedCharacters.length;
    for ( var i = 0; i < length; i++ ) {
      result += combinedCharacters.charAt(Math.floor(Math.random() *
 charactersLength));
 console.log("this is the result", result)
   }
   return result;
  
}

/*
read above randomizepassword first
the function showfinal result stores the result value from randomize password, which is the new string created,
 into final result. an alert is shown to indicate a successful loop and the final password is returned to this
function. If there was an error in user input in the writePassword function, an alert to start again shows up and
the acceptable boolean is reset to true. Finally, with most criteria met, the showfinalresult function will be 
stored in the password variable in the writePassword function where it will replace the contents in the 
#password id.
*/

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




