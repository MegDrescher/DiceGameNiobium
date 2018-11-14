//Dice Game- Two players- Three rounds total. 
//First player to score the most points within three rounds wins.
//Round one-roll 20 and 12 sided dice. 
//get player total for round One
//Round two-roll 10 and 8 sided dice.
//get player total for round two
//Last round- roll 6 and 4 sided dice.
//get player total for round three
//Roll a "one" on each of the dice during any of the three rounds and it's an automatic WIN.


function gameLogic(sides,amount) { ///masterfunction 
	let runDiceGame;
	let playerOne= getUserInput("Please enter player name!");
	// let playerTwo= getUserInput("Please enter player name!");
	let playerOneScore=0;


	////////// ONE ROUND /////////////
function roundOne(){
	let dice20= rollDice(20);
	let dice12= rollDice(12);
	let didWinInstantly = checkForInstantWin(dice20, dice12)
	if(didWinInstantly === true) {
		return;
	}
	// if not an instant win, add to playerOne score

	playerOneScore=updatePlayerScore(playerOneScore,dice20,dice12);

	//////////////////////////////////

function roundTwo(){
	let dice10= rollDice(10);
	let dice8= rollDice(8);
	let didWinInstantly = checkForInstantWin(dice10, dice8);
	if(didWinInstantly === true){
		return;
	}

	playerOneScore=updatePlayerScore(playerOneScore,dice10,dice8);


 //////////////////
function roundThree(){
	let dice6= rollDice(6);
	let dice4= rollDice(4);
	let didWinInstantly = checkForInstantWin(dice6, dice4);
	if(didWinInstantly === true){
		return;
	}

	playerOneScore=updatePlayerScore(playerOneScore,dice6,dice4);
	
}

function finalTotalScore(){



}

function updatePlayerScore(currentScore, roll1, roll2) {
	let newScore=currentScore+roll1+roll2;
	return newScore;
}
console.log("newScore")	


function checkForInstantWin(roll1, roll2) {
	if(roll1 === 1 && roll2 === 1){
		console.log("Automatic Win!");
		return true;
	} else {
		return false;
	}





///document.getElementById ("Begin Game").addEventListener ("click", myFunction, false);

/// myFunction() {
	///document.getElementById("frm1").submit();
 



