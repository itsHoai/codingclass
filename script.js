// Assignment Code
var generateBtn = document.querySelector("#generate");

// User confirm variables
var Length;
var confirmNumber;
var confirmCharater;
var confirmUppercase;
var confirmLowercase;

// Variable Values
//Numbers
number = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
//Characters
characters = ("`", "!", "@", "#", "$", "%", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "<", ">", ".", "?", "/");
// Alphabet
alpha = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
//UpperCase
alphaupper = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "x", "Y", "Z");
var choices = [];

//function to generate pw
function generatePassword() {
  //prompts
  Length = (prompt("How many characters would you like your password? Choose between 8 to 128"));
  if (!Length) {
    alert("This needs a value");
  } else if (Length < 8 || Length > 128) {
    Length = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase Letters?");
    confirmLowercase = confirm("Will this contain Lowercase Letters?");
  };
  if (!confirmCharacter && !confirmLowercase && !confirmNumber && !confirmUppercase) {
    choices = alert("You must choose a criteria!");
  }
  if (confirmCharacter === true) {
   choices.push (characters);
  }
  if (confirmNumber === true) {
    choices.push (number);
  }
  if (confirmLowercase === true) {
    choices.push (alpha);
  }
  if (confirmUppercase === true) {
    choices.push (alphaupper);
  }
}
function randompassword() {
  generatePassword();
  password = "";


  for (let i = 0; i< Length; i++) {
    var random = Math.floor(Math.random() * (choices.length))
    password += choices[random];  
  }
  return password; 
}
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

//write password in textbox
function writePassword() {
  var password = randompassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}