// Assignment Code
var generateBtn = document.querySelector("#generate");

// Separate variables for characters
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var Num = "0123456789".split("");
var symbols = "!#$%&()*+,-./?@".split("");

// This function will generate a random password
function generatePassword() {
    // Validate that the password is between 8-128 characters
    var userChoiceLength = prompt("Select between 8 and 128 characters")
    var megaArrayCharacters = [];
    var finalPassword = [];

    if (userChoiceLength < 8 || userChoiceLength > 128) {
        alert('Not the recommended character length')
        return null
    }

    // Different options of characters to select
    var userChoiceLower = confirm("Do you need LowerCase?");
    var userChoiceUpper = confirm("Do you need UpperCase?");
    var userChoiceNumber = confirm("Do you need Numbers?");
    var userChoiceSymbols = confirm("Do you need Symbols?");

    // Validate at least one of the prompted options
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
        //   Randomize megaArrayCharacters and push one character per loop into the final password array
        var randomChar = megaArrayCharacters[Math.floor(Math.random() * megaArrayCharacters.length)];

        finalPassword.push(randomChar);

    }

    // This returns the array with no commas
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


