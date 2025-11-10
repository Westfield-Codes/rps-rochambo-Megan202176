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
let score = [0,0];

function main(){
let u=""
let c=""
while(u=c){
    u=userTurn()
    c=cpuTurn()
    if (u==c)alert("We both chose"+ c)
}
let combo=u+c
 winner=findWinner(combo)
 ("You chose "+ u+" and I chose "+ c+ winner+" won!")
}

function setRounds() {

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
return("r")
}

/* cpuTurn
* computer choose between r, p, or s
* @param:none
* @return: choice
*/
function cpuTurn() {
return ("p")
}

/* findWinner
* takes user and computer turn
* decides who the winner is
* returns winner
* @param:u,c
* @return: winner
*/
function findWinner(u,c) {
let u="r"
let c="p"
}