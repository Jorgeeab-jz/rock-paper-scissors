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
let background = document.getElementById('background');
let player;
let compChoice;
let playerScore = 0;
let compScore = 0;
let winner = false;
let result = document.getElementById('round');
let playerChoice = document.getElementById('selectionP');
let computerChoice = document.getElementById('selectionC');
let playerScoreDisp = document.getElementById('player-score');
let compScoreDisp = document.getElementById('comp-score');


function choice(chc){ //assigns one of the three options to the player
    player = chc;
}
function random(n) { //Random integer generator
    return Math.floor(Math.random() * n);
}
function compChoose() {
    compChoice = options[random(3)];
}
function fight(player,computer){ //Compare the player choice vs the computer choice to get a winner or a tie
     if (player.weakness === computer.identity) {
        compScore += 1;
    }else if (player.goodAgnst === computer.identity) {
        playerScore += 1;
    }
}
function setWinner(){
    if (playerScore === 5){
        result.textContent = 'You win!';
        background.classList.toggle('final-win');
        winner = true;
    }else if (compScore === 5){
        result.textContent = 'You lose!';
        background.classList.toggle('final-lose');
        winner = true;
    }
}
function showScore() {
    playerScoreDisp.textContent = playerScore;
    compScoreDisp.textContent = compScore;
}
function setSelectionIcon (entity) {
    if (entity.identity == 'ROCK'){
        return `<i class="fas fa-hand-rock"></i>`
    } else if (entity.identity == 'PAPER'){
        return `<i class="fas fa-hand-paper"></i>`
    }else if (entity.identity == 'SCISSORS'){
        return `<i class="fas fa-hand-peace"></i>`
    }
}
function showSelections (){
    playerChoice.innerHTML = setSelectionIcon(player);
    computerChoice.innerHTML = setSelectionIcon(compChoice); 
}
function reset() {
    player = undefined;
    compChoice = undefined;
    playerChoice.textContent = '';
    computerChoice.textContent = '';
    result.textContent = '';
    playerScore = 0;
    compScore = 0;
    showScore();
    winner = false;
    background.removeAttribute('class');
}
function play() {
    if (!winner){
    compChoose();
    showSelections();
    fight(player,compChoice);
    setWinner();
    showScore();
}
}
