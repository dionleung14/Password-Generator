//Listing password criteria
// Array of uppercase letters
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Array of lowercase letters
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of special characters
var specialArr = ["!", "#", "$", "%", "&", '"', "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Array of numeric characters
var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Empty array to be populated depending on user input
var choiceArr = [];

// Define password length variable based on user input
var passLength = "";

// Defining variables for password creation based on user input
var upperTrue = true;
var lowerTrue = true;
var specialTrue = true;
var numberTrue = true;

// Defining function for random selection
function randPass() {
  Math.floor(Math.random()*(passLength+1));
}


// Define generatePassword function
function generatePassword() {
  passLength = prompt("How long do you want your password to be?");
    while (passLength < 8 || passLength > 128 ) {
      passLength = prompt("Invalid password length. Password must be at least 8 characters long and not exceed 128 characters.");
    }
  console.log("Password will be " + passLength + " characters long");
  upperTrue = confirm("Click 'OK' to include capital letters in your password. If you do not wish to include capital letters, click 'Cancel'");
  lowerTrue = confirm("Click 'OK' to include lowercase letters in your password. If you do not wish to include lowercase letters, click 'Cancel'");
  specialTrue = confirm("Click 'OK' to include special characters in your password. Special characters include the following: !" + '"#$%&' + "'()*+,-./:;<=>?@[" + "\\]^_`{|}~. If you do not wish to include special characters, click 'Cancel'");
  numberTrue = confirm("Click 'OK' to include numbers in your password. If you do not wish to include numbers, click 'Cancel'");
    while (upperTrue === false && lowerTrue === false && specialTrue === false && numberTrue === false) {
      alert("Invalid selection. You must pick at least one characteristic.");
      upperTrue = confirm("Click 'OK' to include capital letters in your password. If you do not wish to include capital letters, click 'Cancel'");
      lowerTrue = confirm("Click 'OK' to include lowercase letters in your password. If you do not wish to include lowercase letters, click 'Cancel'");
      specialTrue = confirm("Click 'OK' to include special characters in your password. Special characters include the following: !" + '"#$%&' + "'()*+,-./:;<=>?@[" + "\\]^_`{|}~. If you do not wish to include special characters, click 'Cancel'");
      numberTrue = confirm("Click 'OK' to include numbers in your password. If you do not wish to include numbers, click 'Cancel'");
    }
  console.log("Password will consist of characters");
  console.log("Password is " + passLength);

  // if (upperTrue) {
  //   choiceArr = upperArr;
  // }

  for (i=0; i<passLength; i++) {
    randPass();
  }
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
