
$(document).ready(function(){

  // Images
  $("#powerUp1").attr("src", "assets/images/mario01.png")
  $("#powerUp2").attr("src", "assets/images/mario02.png")
  $("#powerUp3").attr("src", "assets/images/mario03.png")
  $("#powerUp4").attr("src", "assets/images/mario04.png")
  
  // Variables
    var targetNum = 0
    var leaf = 0
    var mushroom = 0
    var flower = 0
    var star = 0
  
    // Game stats
    var playerScore = 0;
    var wins = 0;
    var losses = 0;

  function newGame() {
    // Empties div that contains the players score
    $('#playerScoreDiv').empty();
    playerScore = 0;
    // Assigns a random number between 19 and 120
    targetNum = Math.floor(Math.random() * (120-19) + 19)
    $('#targetNumDiv').html(`Target score: ${targetNum}`);
    console.log(`Target number ${targetNum}`);
    
    // Assigns a hidden value between 1 and 12 to each power up
    mushroom = Math.floor(Math.random() * 11 + 1);
    flower = Math.floor(Math.random() * 11 + 1);
      if (flower === mushroom) {
        flower += 1;
      }  
    leaf = Math.floor(Math.random() * 11 + 1);
      if (leaf === mushroom || leaf === flower) {
        leaf += 2;
      }
    star = Math.floor(Math.random() * 11 + 1);
      if (star === mushroom || star === flower || star === leaf) {
        star += 2;
      }

    /* For testing/cheating
    console.log(`mushroom: ${mushroom}`)
    console.log(`flower: ${flower}`)
    console.log(`leaf: ${leaf}`)
    console.log(`star: ${star}`)
    console.log(`player score: ${playerScore}`) */
  }; // End of newGame() function

// Game starts when the user clicks an image, adding the value of the object to the playerScore
  newGame()

// Mushroom
  $('#powerUp1').click(function() {
    playerScore = playerScore + mushroom
    playerScore = parseInt(playerScore);
      $('#playerScoreDiv').html(`Your score: ${playerScore}`);
      checkWin()
  })

// Flower
  $('#powerUp2').click(function() {
    playerScore = playerScore + flower
      $('#playerScoreDiv').html(`Your score: ${playerScore}`);
      checkWin()
  })

// Leaf
  $('#powerUp3').click(function() {
    playerScore = playerScore + leaf
      $('#playerScoreDiv').html(`Your score: ${playerScore}`);
      checkWin()
  })

// Star
  $('#powerUp4').click(function() {
    playerScore = playerScore + star
      $('#playerScoreDiv').html(`Your score: ${playerScore}`);
      checkWin()
  })

// Win-Loss
  function checkWin() {
    if (playerScore === targetNum) {
      alert('You won!');
      wins++;
      $('#wins').text(`Wins: ${wins}`);
        newGame();
    } else if (playerScore > targetNum) {
      alert('You lose. Game Over!');
      losses++;
      $('#losses').text(`Losses: ${losses}`);
        newGame()
    }
  } // End of checkWin() function 

}) // End of $(document).ready(function()