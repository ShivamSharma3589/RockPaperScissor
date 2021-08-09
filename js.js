let person;      
let cmove, cScore = 0, pScore = 0;
let myAudio = document.getElementById('myAudio');
let newGame = document.getElementById('newGame');
let pape = document.getElementById('paper');
let scisso = document.getElementById('scissors');
let roc = document.getElementById('rock');
let winn = document.getElementById("winner");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let name = document.getElementById("name");
let controls = document.getElementById("controls");
let computerImage = document.getElementById("computerImage");
let myImage = document.getElementById('myImage');
let sound = document.getElementById("sound");
// sound adjustments 
window.onload=()=>{
    myAudio.volume=0.5;
}
// function to get the user name is here.
function myFunction() {
    person = prompt("Please enter your name", "Player");
    cScore = 0;
    pScore = 0;
    winn.innerHTML = "Winner...?";
    playerScore.innerHTML = pScore;
    computerScore.innerHTML = cScore;
    if (person != null) {
        name.innerHTML = person;
        controls.style.display = "block";
        sound.style.display="inline";
        myAudio.play();
    }else{
        name.innerHTML="Player";
    }
    if (person == "") {
        person = "Player";
        name.innerHTML = person;
    }
}
// here is the function to get the move from the computer
function computerMove() {
    return Math.floor((Math.random() * 3) + 1);
}

// here images will appear chosen by computer
function computerimg() {
    cmove = computerMove();
    if (cmove == 1) {
        computerImage.src = 'paper.gif';
    } else
        if (cmove == 2) {
            computerImage.src = 'scissor.gif';
        } else
            if (cmove == 3) {
                computerImage.src = 'rock.gif';
            }
}
// function for deciding the winner 
function subWinner() {
    winn.innerHTML = ("Winner : " + person);
    pScore += 1;
    playerScore.innerHTML = pScore;
}
// function for deciding the winner 
function winner(player) {
    let draw = "Draw";
    let com = "Winner: computer";
    if ((player == 1) && (cmove == 3)) {
        subWinner();
    } else
        if ((player == 2) && (cmove == 1)) {
            subWinner();
        } else
            if ((player == 3) && (cmove == 2)) {
                subWinner();
            }
            else {
                if (player == cmove) {
                    winn.innerHTML = draw;
                } else {
                    winn.innerHTML = com;
                    cScore += 1;
                    computerScore.innerHTML = cScore;
                }
            }
}
// function to show paper
function paper() {
    myImage.src = 'paper.gif';
    computerimg();
    winner(1);
}
// function to show paper
function scissor() {
    myImage.src = 'scissor.gif';
    computerimg();
    winner(2);
}
// function to show paper
function rock() {
    myImage.src = 'rock.gif';
    computerimg();
    winner(3);
}
newGame.addEventListener('click', myFunction);
pape.addEventListener('click', paper);
scisso.addEventListener('click', scissor);
roc.addEventListener('click', rock);
sound.addEventListener('click',()=>{
    if (myAudio.muted) {
        sound.className="fa-solid fa-volume";
        myAudio.muted=false;
        sound.style.color="white";
    } else {
        sound.className="fa-solid fa-volume-xmark";
        myAudio.muted=true;
        sound.style.color="red";
    }
});
