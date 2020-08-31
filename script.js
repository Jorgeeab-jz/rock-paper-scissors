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

let player;
let result = document.getElementById('result');
let selections = document.getElementById('selections');
let compChoice;

function choice(chc){
    if (player == undefined) {
        player = chc;
    } else if (player) {
        alert('You already made a choice');
    }
}

function random(n) { //Random integer generator
    return Math.floor(Math.random() * n);
}
function compChoose() {
    compChoice = options[random(3)];
}
/*function playerChoosing(){ //Assigning one of the three options to the user according to the input
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
}*/

function fight(player,computer){ //Compare the player choice vs the computer choice to get a winner or a tie
    if (player.identity === computer.identity){
        result.textContent = `It's a tie!`;
    }else if (player.weakness === computer.identity) {
        result.textContent = `You lose!`;
    } else if (player.goodAgnst === computer.identity) {
        result.textContent = `You win!`;
    }
}

function showSelections (){
    selections.textContent = '';
    selections.textContent = `You chose ${player.identity.toLowerCase()} 
    and the computer chose ${compChoice.identity.toLowerCase()}`;
}

function reset() {
    player = undefined;
    compChoice = undefined;
    result.textContent = '';
    selections.textContent ='';
}

function play() {
    compChoose();
    if (!player){
        alert('Make your choice first!')
    } else {
        showSelections();
        fight(player,compChoice);
    }
}







/*function duel(){ // Starter of the game on the console
    preparation();
    playerChoosing();
    
    if (player)  {
    compChoose();
    console.log(`You chose ${player.identity}`);
    console.log(`Computer chose ${compChoice.identity}`);
    fight(player,compChoice);
}
}*/

