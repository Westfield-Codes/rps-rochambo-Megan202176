/* Steps 
*  0. Refer to https://lucid.app/lucidchart/3da5e3b5-33fe-4823-875c-81fb61c9d84c/view
*  1. Create Documentation and stubs for each function. //
*  2. Unit Test each function:
*     a. Add pseudocode based on flowchart, picking version
*     b. Test with console.log using stubs
*     c. Commit when it works.
*     d. Move to next function
*  3. System Test finished version (does it work right in all conditions?)
*/
/* Global Variables */
let scores = [0,0];

    function main(){
    let rounds=setRounds()
    let u=""
    let c=""
    while(u==c){
        u=userTurn()
        c=cpuTurn()
        if (u==c)alert("We both chose"+ c)
    }
    let combo=u+c
    let winner=findWinner(combo)
    alert("You chose "+ u+" and I chose "+ c+" "+winner+" won!")
    
    }


function setRounds() {
    let rounds=propmt("How many rounds do you want? ODD numbers only.")
    for(round=1; round<=rounds; round++){

    }
        }

function score(winner){
    let winnerWords=[You, I]
    let scoreWin=winnerWords.indexOf(winner)
    scores[scoreWin]++
    alert(winner+" won. The score is now YOU: "+ scores[0]+ "and I: "+ scores[1])
    if(scores[scoreWin]>rounds/2)
        alert(winner +" won the whole series")
    }

/* RPS Round
* plays a round of RPS and tells the winner
* @param: none
* @return:none
*/
function rpsRound() {
    
}

/* userturn
* user can choose r, p, or s.
* if bad Input, give new choice
* @param:none
* @return:choice
*/
function userTurn() {
let choice=prompt("enter r, p, or s.")
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