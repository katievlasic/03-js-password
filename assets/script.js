// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

const decide = {
  ichar: function(x) {
    window.prompt("Please enter how many characters the password needs to be:")
  },
  schar: function() {
    window.prompt("Would you like special characters in your password?")
  }, // how to force the inputs to be boolean???
  lchar: function() {
    window.prompt("Would you like lowercase characters in your password?")
  },
  uchar: function() {
    window.prompt("Would you like uppercase characters in your password?")
  }
};


function generatePassword() {
  let userIchar = decide.ichar();
  if (userIchar >= 128) {
    alert("Please enter a number less than 128!");
  }
  else if (userIchar <= 128) {
    userIchar.String.length;
    console.log(Math.floor(Math.random()*x));
  }
  let userSchar = decide.schar();
  if(userSchar) {
    //no need to declare anything after userSchar since input is boolean
    userSchar.toUppercase();
  } else {
    alert("Okay, no uppercase letters will be included.");
  }
  let userLchar = decide.lchar();
  if (userLchar) {
    userLchar.toLowercase();
  }
  else {
    alert("Okay, no lowercase letters will be included.");
  }
  let userUchar = decide.uchar();
  if (userUchar) {
    userUchar.Math.value; //placeholder for now
  }

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();