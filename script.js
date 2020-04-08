// Listing password criteria
// Array of uppercase letters
const upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Array of lowercase letters
const lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of special characters
const specialArr = ["!", "#", "$", "%", "&", '"', "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Array of numeric characters
const numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let upperSel = document.getElementById("upper")
let lowerSel = document.getElementById("lower")
let numberSel = document.getElementById("number")
let specialSel = document.getElementById("special")

upperSel.addEventListener("mouseover", function(){
  console.log("hovered")
})
lowerSel.addEventListener("mouseover", function(){
  console.log("hovered")
})
numberSel.addEventListener("mouseover", function(){
  console.log("hovered")
})
specialSel.addEventListener("mouseover", function(){
  console.log("hovered")
})

// Defining a function for random selection
// Input requires an array
// Function takes a random integer number between 0 and the length of the array, like an index,
// and returns the element at the random position within the array inputted
function randSel(randArr) {
  x = Math.floor(Math.random()*(randArr.length));
  return randArr[x];
}

// Define generatePassword function
// This generatePassword function will output a password of user inputted length consisting of 
// random characters of a subset that the user specifies 
function generatePassword() {
  // Define an empty array to be populated with characters depending on user input
  const choiceArr = [];
  
  // Define a variable for password length based on user input
  let passLengthInput = document.getElementById("character-count")
  let passLength = Number(passLengthInput.value)
  
  // Checks for illegal values of password length
if (passLength == "") {
  alert("Cannot leave password length blank. Please enter a number between 8 and 128.");
  console.log("Error 1");
} else if (passLength < 8) {
  alert("Invalid password length. Password must be at least 8 characters long.");
  console.log("Error 2a");
} else if (passLength > 128) {
  alert("Invalid password length. Password must not exceed 128 characters.");
  console.log("Error 2b");
} else if (passLength % 1 !== 0) {
  alert("Invalid password entry. Password must be an integer.");
  console.log("Error 3");
} else if (typeof passLength !== 'number') {
  alert("Please enter a number.");
  console.log("Error 4");
}

  // let upperSel = document.getElementById("upper")
  // let lowerSel = document.getElementById("lower")
  // let numberSel = document.getElementById("number")
  // let specialSel = document.getElementById("special")
  
    //Validity check for user input to make sure they selected at least one type of character
    if (upperSel.checked === false && lowerSel.checked === false && specialSel.checked === false && numberSel.checked === false) {
        alert("Invalid selection. You must pick at least one characteristic.");
        console.log("Error 5")
    }
    
    // Populating the choice array based on user criteria
    if (upperSel.checked) {
      choiceArr.push(...upperArr);
    } 
    
    if (lowerSel.checked) {
      choiceArr.push(...lowerArr);
    } 

    if (specialSel.checked) {
      choiceArr.push(...specialArr);
    } 
    
    if (numberSel.checked) {
      choiceArr.push(...numArr);
    } 

  // Defining an empty password string that will be populated with random characters from choice array
  var passString = "";

  // Iterates the same amount of times as the desired password length
  for (i=0; i<passLength; i++) {
    // Calls the function for random selection and stores it in variable a
    a = randSel(choiceArr);
    // Concatenates the passString with the random selection
    passString += a;
    // console.log(i);
  }
  
  // Finally, returns passString as a useable item
  return passString;
}

// Assignment Code
// Assigns a variable to DOM of HTML element with id of generate for shorthand use
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Takes the function generatePassword and assigns it to local variable password
  var password = generatePassword();
  // generatePassword();

  // Assigns a variable to DOM of HTML element with id of password for shorthand use
  var passwordText = document.querySelector("#password");

  // Assigns the value of local variable password to the HTML value 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
