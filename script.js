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
let result = document.getElementById('round');
let playerChoice = document.getElementById('selectionP');
let computerChoice = document.getElementById('selectionC');
let compChoice;

function choice(chc){
    if (!player) {
        player = chc;
        console.log(player);
    } 
}
function random(n) { //Random integer generator
    return Math.floor(Math.random() * n);
}
function compChoose() {
    if (!compChoice){compChoice = options[random(3)];
    console.log(compChoice);
}
}
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
    playerChoice.textContent = player.identity;
    computerChoice.textContent = compChoice.identity; 
}
function reset() {
    player = undefined;
    compChoice = undefined;
    playerChoice.textContent = '';
    computerChoice.textContent = '';
    result.textContent = '';
}
function play() {
    compChoose();
    showSelections();
    fight(player,compChoice);
}
