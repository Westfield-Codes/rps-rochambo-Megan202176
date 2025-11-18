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
    rock.src="rock.jpg";
    rock.addEventListener("click", sayRock);
    board.appendChild(rock);
    let paper=document.createElement("img");
    paper.src="paper.jpg";
    paper.addEventListener("click", sayPaper);
    board.appendChild(paper);
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
function rpsRound(round) {
    let u=""
    let c=""
    while(u==c){
        u=userTurn(round)
        c=cpuTurn()
        if (u==c)alert("We both chose "+ c)
    }
    let combo=u+c
    let winner=findWinner(combo)
    return winner
    //alert("You chose "+ u+" and I chose "+ c+" "+winner+" won!")
    
}

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
let choice= Math.floor(Math.random()*3)
let moves=["r", "p", "s"]
return moves[choice]
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