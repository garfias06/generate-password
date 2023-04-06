// Assignment Code
var generateBtn = document.querySelector("#generate");

// Types of characters

var lower=["abcdefghijklmnopqrstuvwxyz"];
var upper=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var Num=["0123456789"];
var special=["!#$%&()*+,-./?@"];

// User interaction
var userInput="";
var finalPassword=[""];
// Validate Passwords

var lower1="";
var upper1="";
var Num1="";
var special1="";
// Functions
alert("Select between 8-120 characters");
characterChoice();

function characterChoice(){
userInput=prompt("How many characters do you need?");
if(userInput <8 || userInput>128){
    alert("Wrong selection, choose between 8-120 characters");
    characterChoice();
  }else(userInput >=8 || userInput <=128);{
    compareLower();
  }
  };
  function compareLower(){
    Lcase=confirm("Do you need LowerCase?");
    if(Lcase){
  finalPassword.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    }else{
      compareUpper();
    }
  };
  function compareUpper(){
    Ucase=confirm("Do you need UpperCase?");
    if(Lcase){
    finalPassword.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
    }else{
      compareNum();
    }
  };
  function compareNum(){
    Num2=confirm("Do you need Numbers?");
    if(Num2){
    finalPassword.push("0","1","2","3","4","5","6","7","8","9");
    }else{
      compareSpecial();
    }
  };
  function compareSpecial(){
    Special2=confirm("Do you need Special Characters?");
    if(Special2){
    finalPassword.push("!","#","$","%","&","*","+",",","-",".","/","?","@");
    }else{
      generatePassword();
    }
  };
  function generatePassword(){
    var realPassword="";
    for(var i=0; i<finalPassword.length; i++);
    realPassword+=finalPassword[i];
};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);