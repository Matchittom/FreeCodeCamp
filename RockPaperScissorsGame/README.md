# Rock, Paper, Scissors

Review DOM Manipulation mini project

function getRandomComputerResult() - used to get the computer's choice -------Math.random() + Math.floor()---------

function hasPlayerWonTheRound(player, computer) - returns true if player has won round ----------------------------
return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
    );

function getRoundResults(userOption) - return message for round ---------------------------------------------------
  hasPlayerWonTheRound function checks if player wins the round
  template literals to build the message - 
  playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;

function showResults(userOption) - show updated scores + return results message ------------------------------------
if (playerScore ==== 3) or (computerScore === 3) ->
winnerMsgElement.innerText - show winner message
resetGameBtn.style.display = "block" - show reset button
optionsContainer.style.display = "none" - hide play options

function resetGame() - reset game ---------------------------------------------------------------------------------
  //reset scores
  playerScore = 0;
  computerScore = 0; 
  update playerScoreSpanElement + computerScoreSpanElement to display new scores
  resetGameBtn.style.display = "none";  //hides resetGameBtn
  optionsContainer.style.display = "block"; // shows optionsContainer so player can play again
  winnerMsgElement.innerText = ""; roundResultsMsg.innerText = ""; //clears the content for each element

## How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/Matchittom/FreeCodeCamp/RockPaperScissorsGame.git
   
2. Open index.html in your browser.
