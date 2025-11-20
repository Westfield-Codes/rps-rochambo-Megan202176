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

function main(){
    document.getElementById("playButton").style.display = 'none';
    let instruction=document.createElement("p");
    instruction.innerHTML="How many rounds would you like?";
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

function setRounds() {

    rounds=document.getElementById("roundsBox").value;
    console.log(rounds);
    buildConsole();
    //return rounds    
}

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
    let roundIs=document.createElement("p");
    roundIs.innerHTML="Round "+round+" of "+ rounds;
    scoreBoard.appendChild(roundIs);
}


function playingRock(){
    move="rock";
    cpuTurn();
}
function playingPaper(){
    move="paper";
    cpuTurn();
}
function playingScissors(){
    move="scissor";
    cpuTurn();
}

function sayScissors(){
    console.log("scissors");
}

function sayPaper(){
    console.log("paper");
}

function sayRock(){
    console.log("rock");
}

function score(winner){
    let winnerWords=["You", "I"]
    let scoreWin=winnerWords.indexOf(winner)
    scores[scoreWin]++
    alert(winner+" won. The score is now YOU: "+ scores[0]+ " and I: "+ scores[1])
    if(scores[scoreWin]>rounds/2)
        alert(winner +" won the whole series.")
    }

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
function cpuTurn() {
    board.innerHTML=""
    let moveWords=["rock","paper","scissors"];
    let moves=["r", "p", "s"]
    let u= moves[moveWords.indexOf(move)]
    let cMove= Math.floor(Math.random()*3)
    let c=moveWords[cMove];
    while(u==c){
        alert("We both chose "+ c)
        buildConsole()
    }
    let combo=u+c
    let winner=findWinner(combo)
    
    alert ("You chose "+ move+" and I chose "+ c)
}

/* findWinner
* takes user and computer turn
* decides who the winner is
* returns winner
* @param:u,c
* @return: winner
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