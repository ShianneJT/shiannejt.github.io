// Create a list of words
// User presses a letter
// It checks to see if that is correct
// If correct it returns the word with the correct letters and underscores
// ... and minuses from the letters remaining
// If incorrect it minuses one from their guesses remaining and adds the letter to a letters guessed div
// When no letters remain add one to the wins and start the game over

// Word list
    var officeCharacters = ["michael", "pam", "jim", "dwight", "stanley", "kevin", "angela",
        "phylis", "meredith", "creed", "oscar", "ryan", "kelly", "andy", "toby", "darryl",
        "moes", "jan", "david", "robert", "holly"];

// Game Stats
    var lives = 10;
    var losses = 0;
    var wins = 0;
    var lettersGuessed = "";
    var livesLeft = document.getElementById("livesLeft");

// Start new game - Resets lives
    function makeNewGame() {
        lives = 10;
        lettersGuessed = "";
        var randomCharacter = officeCharacters[Math.floor(Math.random() * officeCharacters.length)];
        var randomWordDiv = document.getElementById("randomWord");
        var lettersGuessedDiv = document.getElementById("lettersGuessed");
        lettersGuessedDiv.textContent = "";
        randomWordDiv.innerHTML = "";

        livesLeft.textContent = lives;

        var randomCharacterArray = randomCharacter.split("");       // .split creates an array of the individual characters of the randomCharacter var
        for (var x = 0; x < randomCharacterArray.length; x++) {
           // console.log(randomCharacterArray[x]);
           randomWordDiv.innerHTML += "<span id='letter_" + x +"'> _ </span>";
        }
        return randomCharacterArray;
    }

    var randomCharacterArr = makeNewGame();
    var lettersLeft = randomCharacterArr.length;

//  This executes when the user presses a key and assigns it to userChoice
    document.onkeyup = function(event) {
        userChoice = event.key;

//  This checks to see if the userChoice/letter was already used and if not it continues with the next if statement
        if(lettersGuessed.indexOf(userChoice) < 0){
//  This checks to make sure the user entered a lowercase letter then adds the userChoice to the lettersGuessed string and HTML
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                lettersGuessed += userChoice;
                var lettersGuessedDiv = document.getElementById("lettersGuessed");
                lettersGuessedDiv.textContent = lettersGuessed;lettersGuessed

//  If userChoice exists in randomCharacter
                if(randomCharacterArr.indexOf(userChoice) > -1 ){
                    var pos = 0;
                    var i = -1;
                    while (pos != -1) {
                        pos = randomCharacterArr.indexOf(userChoice, i + 1);
                        i = pos;
                        var letterDiv = document.getElementById("letter_" + i);
                        if(letterDiv){
                            letterDiv.textContent = userChoice;
                            lettersLeft--;
                        }
                    }
//  If there are no more letters left, the user has won the game and the game starts over
                    if(lettersLeft === 0){
                        randomCharacterArr = makeNewGame();
                        lettersLeft = randomCharacterArr.length;
                        wins++;
                        var winsCount = document.getElementById("wins");
                        winsCount.textContent = wins;
                        alert('You win!')
                    }

//  If there are no more lives left, the user has lost the game and the game starts over
                } else {
                    if(lives === 0){
                        randomCharacterArr = makeNewGame();
                        lettersLeft = randomCharacterArr.length;
                        losses++;
                        var lossesCount = document.getElementById("losses");
                        lossesCount.textContent = losses;
                        alert('You lost :( Type a letter to play again.')
                        // The lives drops to 9 after a loss and this is my workaround for now
                        lives++
                    }
                    lives--;
                    livesLeft.textContent = lives;
                }
            } else {
                alert("Enter a letter");
            }
        }
}

// var officeCharacters = ["michael scott", "pam beesly", "jim halpert", "dwight schrute",
// "stanley hudson", "kevin malone", "angela martin", "phylis vance", "bob vance of vance refrigeration",
// "meredith palmer", "creed bratton", "oscar martinez", "ryan howard", "kelly kapoor", "andy bernard",
// "toby flenderson", "darryl philbin", "moes", "jan levinson", "david wallace", "robert california",
// "holly flax", "todd packer"];