// Assignment Code
var generateBtn = document.querySelector("#generate");


var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var Num = "0123456789".split("");
var symbols = "!#$%&()*+,-./?@".split("");

function generatePassword() {
    // ask the user fo the length of the password
    // validate that the password is between 8-128 characters
    var userChoiceLength = prompt("Select between 8 and 128 characters")
    var megaArrayCharacters = [];
    var finalPassword = [];

    if (userChoiceLength < 8 || userChoiceLength > 128) {
        alert('not the recommended character length')
        return null
    }

    // ask the user if they want uppercase, lowercase, symbols, or numbers
    var userChoiceLower = confirm("Do you need LowerCase?");
    var userChoiceUpper = confirm("Do you need UpperCase?");
    var userChoiceNumber = confirm("Do you need Numbers?");
    var userChoiceSymbols = confirm("Do you need Symbols?");

    // we need to validate that atleast one choices is selected
    if (!userChoiceLower && !userChoiceNumber && !userChoiceUpper && !userChoiceSymbols) {
        alert('Please select at least one option')
        return null
    }

    if (userChoiceLower) {
        megaArrayCharacters = megaArrayCharacters.concat(lower)
    }

    if (userChoiceUpper) {
        megaArrayCharacters = megaArrayCharacters.concat(upper)
    }

    if (userChoiceNumber) {
        megaArrayCharacters = megaArrayCharacters.concat(Num)
    }

    if (userChoiceSymbols) {
        megaArrayCharacters = megaArrayCharacters.concat(symbols)
    }

    for (var i = 0; i < userChoiceLength; i++) {
        //   randomize the megacharacterarry and push one character per loop into the final password array
        var randomChar = megaArrayCharacters[Math.floor(Math.random() * megaArrayCharacters.length)];

        finalPassword.push(randomChar);

    }

    // how to return the array with no commas
    return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


