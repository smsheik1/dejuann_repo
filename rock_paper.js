
// var userChoice = prompt("Do you Choose Rock Paper, or Scissors?");
// console.log("You chose: " + userChoice)

// var compChoice = Math.random()

// if (compChoice <= .33) {
// 		compChoice = "rock";
// 	}
// 	else if (compChoice <= .66) {
// 		compChoice = "paper";
// 	}
// 	else {
// 		compChoice = "scissors"
// 	}


// function rock_paper(compChoice, userChoice) {

// 	if (userChoice === "rock") {
// 		if (compChoice === "paper") {
// 			console.log("paper beats rock, Computer's choice wins!")
// 		}
// 		else if (compChoice === "scissors") {
// 			console.log("rock beats scissors, user's choice wins!")
// 		}
// 		else {
// 			console.log("It was a tie!")
// 		}
// 	};
// 	else if (userChoice === "paper") {
// 		if (compChoice === "rock") {
// 			console.log("paper beats rock, User's choice wins!")
// 		}
// 		else if (compChoice === "scissors") {
// 			console.log("scissors beats paper, Computer's choice wins!")
// 		}
// 		else {
// 			console.log("It's a tie!")
// 		}
// 	};
// 	else if (userChoice === "scissors") {
// 		if (compChoice === "paper") {
// 			console.log("scissors beats paper, User's choice wins!")
// 		}
// 		else if (compChoice === "rock") {
// 			console.log("rock beats scissors, Computer's choice wins!")
// 		}
// 		else {
// 			console.log("It's a tie!")
// 		}
// 	};
// 	else {
// 		console.log("You entered an unsupported response, please try again!")
// 	};
// };

// rock_paper(compChoice, userChoice)

var userChoice = prompt("Do you choose rock, paper, or scissors?");

console.log("you chose: " + userChoice)

var compChoice = Math.random()

if (compChoice <= .33){
    compChoice = "rock"
} 
else if (compChoice <= .66){
    compchoice = "paper";
}
else {
    compchoice = "scissors";
}

if (compChoice === userChoice) {
    console.log("You tied, try again!")
}
else if (compChoice === "rock") {
    if (userChoice === "paper") {
        console.log("You beat the computer!")
    }
    else {
        console.log("The computer beat you!")
    }
}
else if (compChoice === "paper"){
    if (userChoice === "rock"){
        console.log("The computer beat you!")
    }
    else {
        console.log("You beat the computer!")
    }
}
else if (compChoice === "scissors"){
    if (userChoice === "rock"){
        console.log("You beat the Computer!")
    }
    else {
        console.log("The Computer beat you!")
    }
}
else {
    console.log("invalid response")
}