// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

const decide = {
  ichar: function() {
    window.prompt("Please enter how many characters the password needs to be:");
    if (window.prompt.value <=8|| window.prompt.value >=128 || isNaN(window.prompt.value)) {
      alert("The value entered must be between 8 and 128. Please try again.");
    };
    ichar();
  },
  schar: function() {
    window.prompt("Would you like special characters in your password?")
  }, // how to force the inputs to be boolean???
  lchar: function() {
    window.prompt("Would you like lowercase characters in your password?")
  },
  uchar: function() {
    window.prompt("Would you like uppercase characters in your password?")
  },
  nchar: function() {
    window.prompt("Would you like numbers in your password?")
  }
};

// let userPass = randomIndex;
// console.log(userPass);

function generatePassword() {
  let userIchar = decide.ichar();
  if (userIchar >= 128) {
    alert("Please enter a number less than 128!");
  }
  else if (userIchar <= 128) {
    let userPass = userIchar.String.length;
  }
  let userSchar = decide.schar();
  if(userSchar) {
    //no need to declare anything after userSchar since input is boolean
    let userPass = userSchar.toUppercase().concat(userIchar);
  } else {
    alert("Okay, no uppercase letters will be included.");
  }
  let userLchar = decide.lchar();
  if (userLchar) {
    let userPass = userLchar.toLowercase().concat(userIchar,userSchar)
  }
  else {
    alert("Okay, no lowercase letters will be included.");
  }
  let userUchar = decide.uchar();
  if (userUchar) {
    //userUchar.Math.value; //placeholder for now
    let userPass = userUchar.concat(userIchar,userSchar)
  } 
  else {
    alert("Okay, no special characters will be included.")
  }
  let userNchar = decide.nchar();
  if (userNchar) {
    // userNchar.Math.floor(Math.random); //placeholder for now ???
    let userPass = userNchar.toLowercase().concat(userIchar,userSchar,userUchar)
  } 
  else {
    alert("Okay no numbers will be included.")
  }
}

// To do! need to add validation that at least 1 of the options has been selected above ^

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Provided - Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();

// document.class.querySelector("#password")

// Get defined variable of userPass to display in the text box when complete?
// function name() {
  // let display = document.querySelector('#password');
  // display.value = userPass;
//}

// randomIndex


// function factorial(n){
//   let result = 0;
//   for (let index = n; index >0; index--){
//     result += index;
//   }
// return result;
// }