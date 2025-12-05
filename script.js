/* Steps 
*  0. Refer to https://lucid.app/lucidchart/4aa290c2-ecc0-437b-9452-9e5303c5307f/view
*  1. Create Documentation and stubs for each function. //
*  2. Unit Test each function:
*     a. Add pseudocode based on flowchart, picking version
*     b. Test with console.log using stubs
*     c. Commit when it works.
*     d. Move to next function
*  3. System Test finished version (does it work right in all conditions?)
*/

/* Global Variables */
var scores = [0,0];
var rounds=0
var board=document.getElementById("gameBoard");
var move="rock";
var scoreBoard=document.getElementById("scoreBoard");
var round=1;
let moves=["r", "p", "s"]

/* function main
 * main runs whole program
 * @param:none
 * @return:none
 */

function main(){
    document.getElementById("playButton").style.display = "none";
    let instruction=document.createElement("p");
    instruction.innerHTML="How many rounds would you like to play? (1-10)";
    board.appendChild(instruction);
    let roundsBox=document.createElement("input");
    roundsBox.id="roundsBox";
    board.appendChild(roundsBox);
    let roundsButton=document.createElement("button");
    roundsButton.innerHTML="Enter Rounds";
    roundsButton.className="button"
    roundsButton.addEventListener("click", setRounds);
    board.appendChild(roundsButton);
    // for(round=1; round<=rounds; round++){
    // winner=rpsRound(round)
    // score(winner)
       // }
    }

/* function setRounds
 * Gets rounds value from user input.
 * @param:none
 * @return:none
 */
function setRounds() {
    rounds = parseInt(document.getElementById("roundsBox").value);
    console.log(rounds)
    makeScoreBoard();
}


/* function buildConsole
 * Creates images for player to choose.
 * @param:none
 * @return:none
 */
    function buildConsole(){
        board.innerHTML="";
        let rock=document.createElement("img");
        rock.src="alpine-landscape-rock-rubble-01g-al1.png";
        rock.addEventListener("click", playingRock);
        board.appendChild(rock);
        let paper=document.createElement("img");
        paper.src="images.jpg";
        paper.addEventListener("click", playingPaper);
        board.appendChild(paper);
        let scissors=document.createElement("img");
        scissors.src="scissors.png";
        scissors.addEventListener("click", playingScissors);
        board.appendChild(scissors);
        
    }

function makeScoreBoard(){
    let roundNumber=document.createElement("p");
    roundNumber.id="roundNumber";
    roundNumber.innerHTML="Round "+round+" of "+ rounds;
    scoreBoard.appendChild(roundNumber);
    let pScore=document.createElement("p");
    pScore.innerHTML="Player score - " +scores[0];
    pScore.id="rand"
    scoreBoard.appendChild(pScore);
    let cScore=document.createElement("p");
    cScore.id="rand"
    cScore.innerHTML="Computer score - " +scores[1];
    scoreBoard.appendChild(cScore);
    buildConsole()
}

function buildAnswer(move, cMove, winner){
   // buildConsole()
    board.innerHTML="";
    let all= document.createElement("div")
    all.id="popup"

    let pAnswer=document.createElement("p");
    pAnswer.innerHTML="Player answer - "+move;
    pAnswer.id="a"
    all.appendChild(pAnswer);
    //buildConsole()
    let cAnswer=document.createElement("p");
    cAnswer.innerHTML="Computer answer - "+cMove ;
    cAnswer.id="a"
    all.appendChild(cAnswer);
    let final=document.createElement("p");
    final.innerHTML="The winner is "+ winner;
    final.id="a"
    all.appendChild(final);

    all.addEventListener("click", buildConsole);
    board.appendChild(all) 
}

function clearConsole(message){
    board.innerHTML="";
    let both=document.createElement("p");
    both.innerHTML=message;
    board.appendChild(both);
    //buildConsole();
    //makeScoreBoard()
 }

 function makePopUp(message){
    let popup= document.createElement("div")
    popup.id="popup"
    let popMessage= document.createElement("p")
    popMessage.innerHTML=message
    popup.addEventListener("click", buildConsole);
    popup.appendChild(popMessage)
    board.appendChild(popup)

 }

function playingRock(){
    cpuTurn("rock");
    
}

function playingPaper(){
    cpuTurn("paper");

}

function playingScissors(){
    cpuTurn("scissors");

}


// function score(winner){
//     let winnerWords=["You", "I"]
//     let scoreWin=winnerWords.indexOf(winner)
//     scores[scoreWin]++
//     alert(winner+" won. The score is now YOU: "+ scores[0]+ " and I: "+ scores[1])
//     if(scores[scoreWin]>rounds/2)
//         alert(winner +" won the whole series.")
//     }
    
/* RPS Round
* plays a round of RPS and tells the winner
* @param: none
* @return:none
*/

/* userturn
* user can choose r, p, or s.
* if bad Input, give new choice
* @param:none
* @return:choice
*/
    function userTurn(round) {
        let choice=prompt("Round " + round+ ": enter r, p, or s.")
        let moves=["r", "p", "s"]
        if(!moves.includes(choice)){
        alert("invalid input")
        }
        return choice
    }

/* cpuTurn
* computer choose between r, p, or s
* @param:none
* @return: choice
*/
function cpuTurn(move) {
    board.innerHTML=""
    let moveWords=["rock","paper","scissors"];
    let moves=["r", "p", "s"]
    let u= moves[moveWords.indexOf(move)]
    let cMove= Math.floor(Math.random()*3)
    //cMove=0
    let c=moves[cMove];
    if(u==c){
        //alert("We both chose "+ c)
        makePopUp("We both chose "+ c)
    }
    else {let combo=u+c
    let winner=findWinner(combo)
    let gameOver= updateScore(winner);
    if(gameOver) return;

    buildAnswer(move, moveWords[cMove],winner)
    
   }
    //alert ("You chose "+ move+" and I chose "+ c)
    
}

/* function findWinner
 * Compares combo to winArray, if they are equal, that is the winner.
 * Returns winner
 * @param:combo
 * @return:winner
 */
function findWinner(combo) {
    let match=""
    let winner=""
    let winArray=[["r","p","I"],["r","s","You"],["p","r","You"],["p","s","I"],["s","p","You"],["s","r","I"]]
    for(i=0; i<winArray.length; i++){
        match=winArray[i][0]+winArray[i][1];
        if(match==combo)winner=winArray[i][2];
        }

    return winner;
}

/* function updateScore
 * Adds a point to the winner, erases scoreboard, then calls buildScoreBoard()
 * @param: winner
 * @return:none
 */
function updateScore(winner) {
   if (winner == "I") scores[1]++;
   else scores[0]++;
    round++

 if (round > rounds) {
        endGame();
        return true;
    }


   scoreBoard.innerHTML = "";
   makeScoreBoard();
   return false;
//    What if one player has won more than half the rounds? 
//    What if we are out of rounds?

}


function endGame() {
    board.innerHTML = "";       
   scoreBoard.innerHTML="";
    let end = document.createElement("div");
    let winnerText = "";
    end.id="a"
    if (scores[0] > scores[1]) {
        winnerText = "Player wins the game!";
    }
     else if (scores[1] > scores[0]) {
        winnerText = "Computer wins the game!";
    } 

    let message = document.createElement("p");
    message.innerHTML = winnerText;
    end.appendChild(message);

    let playAgainButton = document.createElement("button");
    playAgainButton.innerHTML = "Play Again";
    playAgainButton.className = "button";

   playAgainButton.addEventListener("click", main)

   
   end.appendChild(playAgainButton);
   board.appendChild(end);
   }
