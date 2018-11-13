//Dice Game- Two players- Three rounds total. 
//First player to score 100 points wins the game
//Round one-roll 20 and 12 sided die. 
//Round two-roll 10 and 8 sided die.
//Last round- roll 6 and 4 sided die.
//Roll a "one" on each of the dice during
//any of the three rounds and it's an automatic WIN.



//rollDice function to roll dice for player 1 and player 2
//if a one is rolled on each dice- automatic winner
function gameLogic(sides,amount) {
//sides on dice=20
	let results=[];
	let totalScore=0;
	let roll1;
	let roll2;
	let dice;
	let gameOver;

	if(roll1 === roll2) {
		totalScore=0;
		console.log("Rolled a 10. Keep rolling to 100!");
		break;
	}

	else if (roll1+roll2===1) 
	{
			score=1;
			console.log("You rolled a one! You won!");
	}
	else if (roll1+roll2===1){

			score=1;
	}
	else {

		score=(100- new Array[roll1+roll2]) *1;
	}
	totalScore=+score;
	console.log("You rolled a: "+roll1+" and a "+roll2+" "+(roll1+roll2));
	console.log("Your total score is: "+totalScore+"");
	answer=prompt("Do you want to keep playing (y/n)");
	while(dice!==1){
		console.log("You rolled a"+dice+"."+" Keep rolling!");
//sides on dice=12
	let roll2=Math.floor(Math.random()*12+1);
	while(dice!==1){
	}

	console.log("Winner! You rolled a 1!");

}

//OR use a while loop that rolls dice until a 1 is rolled





function rollDice(num) {
	let roll;
	roll=Math.floor(Math.random()*num)+1;
	console.log(roll);
	return roll;
}

function roundTwo(amount, sides) {
	let roll1
	let roll2
	let roll3
	let roll4
	let roll5
	let roll6
	result=roll(num)+roll(num);
	console.log(result);
}

for (let i=0; i<20; i++) {
	roll1=rollDice(20);
	roll2=rollDice(12);
	roll3=rollDice(10);
	roll4=rollDice(8);
	roll5=rollDice(6);
	roll6=rollDice(4);

	score=roll1+roll2;
	}

}
	//console.log("roll1"+"roll2"<="roll1"+"roll2");


const button = document.querySelector('button');

button.onclick = function() {
  let gameLogic = prompt('Enter Player One:');
  
}



button.onclick = function() {
  let roll = prompt('What did you roll?');
  alert("Roll Again!");
}


