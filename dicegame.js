//Dice Game- Two players- Three rounds total. 
//First player to score 100 points without passing 100 wins the game.
//Round one-roll 20 and 12 sided dice. 
//get player total for round One
//Round two-roll 10 and 8 sided dice.
//get player total for round two
//Last round- roll 6 and 4 sided dice.
//get player total for round three
//Roll a "one" on each of the dice during any of the three rounds and it's an automatic WIN.
runDiceGame(); // not defined??

function gameLogic(sides,amount) { //masterfunction 
	let runDiceGame;
	let humanPlayerOne= getUserInput("Please enter player name!");
	let humanPlayerTwo= getUserInput("Please enter player name!");
	let dice20= rollDice(20);
	let dice12= rollDice(12);
	let dice10= rollDice(10);
	let dice8= rollDice(8);
	let dice6= rollDice(6);
	let dice4= rollDice(4);
	let dice1= rollDice(100);
	let roundOneTotal= dice(20)+dice(12);
	let roundTwoTotal= dice(10)+dice(8);
	let roundThreeTotal = dice(6)+dice(4);
	let finalTotal;
	let rolledAutoWin= determineIfRolledAutoWin(dice1,dice1,roundTotal);
	if (rolledAutoWin ===true) {
		finalTotal= calculateAutoRollWin(dice1, dice1);
	}
	else {
		finalTotal= calculateDiceRollTotal(roundTotal,dice20, dice12);
	}

	console.log("You rolled two 1's! Autowatic Win!"+finalTotal+".");
}


	//let totalScore += dice10
	//let totalScore += dice8
function autoWin() { //autowin function call w/ parameters and a if/else 


}


	

function roundOne( ){


}


function rollDice(num) {
	let roll;
	roll=Math.floor(Math.random()*num)+1;
	console.log(roll);
	return roll;
}




const button = document.querySelector('button');

button.onclick = function() {
  let gameLogic = prompt('Enter Player One:');
  alert("Player One Turn");
}


button.onclick = function(){
	let roll = prompt("What did you roll?");
	alert("Roll again!");
}
