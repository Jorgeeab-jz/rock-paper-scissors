let rock = {
    identity: 'ROCK',
    weakness: 'PAPER',
    goodAgnst: 'SCISSORS'
};
let scissors = {
    identity: 'SCISSORS',
    weakness: 'ROCK',
    goodAgnst: 'PAPER'
};
let paper = {
    identity: 'PAPER',
    weakness: 'SCISSORS',
    goodAgnst: 'ROCK'
};//The three options and their properties
let options = [rock,paper,scissors];//For the computer to choose one

let question;
let player;
let result;
let compChoice;

function compChoose() {
    compChoice = options[random(3)];
}

function random(n) { //Random integer generator
    return Math.floor(Math.random() * n);
}
function preparation(){ //Asking an input from the user
    question = prompt('Rock, paper or scissors?');
}

function playerChoosing(){ //Assigning one of the three options to the user according to the input
    if (question.toUpperCase() == 'ROCK'){
        player = rock;
    }else if (question.toUpperCase() == 'PAPER'){
        player = paper;
    }else if (question.toUpperCase() == 'SCISSORS'){
        player = scissors;
    }else {
        alert('Please choose a valid option');
        preparation();
    }
}

function fight(player,computer){ //Compare the player choice vs the computer choice to get a winner or a tie
    if (player.identity === computer.identity){
        console.log('Its a tie!');
    }else if (player.weakness === computer.identity) {
        console.log('You lose!');
    } else if (player.goodAgnst === computer.identity) {
        console.log('You win!');
    }
}

function duel(){ // Starter of the game on the console
    preparation();
    playerChoosing();
    
    if (player)  {
    compChoose();
    console.log(`You chose ${player.identity}`);
    console.log(`Computer chose ${compChoice.identity}`);
    fight(player,compChoice);
}
}

