// provided in assignment
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// declare global variables
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();
const special = "!@#$%^&*?{}[]<>()";
const num = "0123456789";

// setup variable for all prompts
const decide = {
  passlength: function() {
    return window.prompt("Please enter how many characters the password needs to be:");
  }, 
  schar: function() {
    return window.confirm("Press 'OK' to include special characters (ex. *,&,!,etc)}")
  },
  lchar: function() {
    return window.confirm("Would you like lowercase characters in your password? 'OK' = yes")
  },
  uchar: function() {
    return window.confirm("Would you like uppercase characters in your password?'OK' = yes")
  },
  nchar: function() {
    return window.confirm("Would you like numbers in your password? 'OK' = yes")
  }
};

// concatenation in strings is +=
// if open array used, concat syntax can be used if defined lower = ["y","x","z"] then validchars = validchars.concat(lower)

function generatePassword() {
  let validchars = "";
  let passLength = decide.passlength();
  // console.log("userIchar = ",userIchar);
  if (passLength <=8|| passLength >=128 || isNaN(passLength)) {
    alert("The value entered must be between 8 and 128. Please try again.");
    generatePassword();
  }
  let userSchar = decide.schar();
  if(userSchar) {
    validchars += special;
  } 
  let userLchar = decide.lchar();
  if (userLchar) {
   validchars += lower;
  }
  let userUchar = decide.uchar();
  if (userUchar) {
   validchars += upper;
  } 
  let userNchar = decide.nchar();
  if (userNchar) {
    validchars += num;
  } 
  console.log("validchars.length = ", validchars.length);
  console.log("validchars = ", validchars);
  if (validchars.length === 0) {
    alert("Please select at least 1 password detail (ex. special character, lower or upper case, or numbers)")
    generatePassword();
  }
  let randomPassword = "";
  let randomIndex = 0;
  let randChar = "";
  // validation that at least 1 of the options has been selected above ^
  for (let i = 0; i < passLength; i++){
    // challenge to combine all below into 1 line
    randomIndex = Math.floor(Math.random() * validchars.length);
    console.log("randomIndex = ", randomIndex);
    randChar = validchars[randomIndex];
    console.log("randChar = ", randChar);
    randomPassword += randChar; 
    console.log("randomPassword = ", randomPassword);
  }
  return randomPassword;
}



// Provided - Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();