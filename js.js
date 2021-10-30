let person = 'player';
let cmove;
let pScore = 3;
let cScore = 0;
let chance = 0;
let newGame = document.getElementById('newGame');
let pape = document.getElementById('paper');
let scisso = document.getElementById('scissors');
let roc = document.getElementById('rock');
let winn = document.getElementById("winner");
let name = document.getElementById("name");
let controls = document.getElementById("controls");
let myImage = document.getElementById('myImage');
let sound = document.getElementById("sound");
let star = document.getElementsByClassName('star');
let fstars = document.getElementsByClassName('fstars');
let sweetAlert = document.getElementById('sweetAlert');
let sweet = document.getElementById('sweet');
let winnerAlert = document.getElementById('winnerAlert');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

window.onload = () => {
    // sweet alert button code goes here
    btn1.innerText = "Let's Play";
    btn1.style.backgroundColor = 'rgb(0, 119, 255)';
    btn1.addEventListener('click', () => {
        sweetAlert.style.display = 'none';
    });
}
// to announce the winner 
function announcement() {
    let Alert = document.getElementById('Alert');
    let result = document.getElementById('result');
    if (chance == 3) {
        winnerAlert.style.display = 'flex';
        Alert.style.transform = 'scale(1)';
        result.innerHTML = "none";
        if (cScore >= 2) {
            result.innerHTML = "Computer";
            for (let i = 0; i < cScore; i++) {
                fstars[i].className = 'fas fa-star fstars';
                fstars[i].style.color = 'gold';
                fstars[i].style.textShadow = ' 0 0 5px red';
            }
        } else {
            result.innerHTML = person;
            for (let i = 0; i < pScore - 3; i++) {
                fstars[i].className = 'fas fa-star fstars';
                fstars[i].style.color = 'gold';
                fstars[i].style.textShadow = ' 0 0 5px red';
            }
        }
    }
}
// function to get the user name is here.
function myFunction() {
    person = prompt("Please enter your name", person);
    winn.innerHTML = "Winner...?";
    if (person != null) {
        name.innerHTML = person;
        controls.style.display = "block";
        sound.style.display = "inline";
        myAudio.play();
    } else {
        name.innerHTML = "Player";
    }
    if (person == "") {
        person = "Player";
        name.innerHTML = person;
    }
    Reset();
}
// funtion for reset the game 
function Reset() {
    pScore = 3;
    cScore = 0;
    chance = 0;
    let len = star.length;
    for (let i = 0; i < len; i++) {
        star[i].className = 'far fa-star star';
        star[i].style.color = 'rgba(0, 0, 0, 0.5)';
    }
    for (let i = 0; i < 3; i++) {
        fstars[i].className = 'far fa-star fstars';
        fstars[i].style.color = 'white';
    }
}
// here is the function to get the move from the computer
function computerMove() {
    return Math.floor((Math.random() * 3) + 1);
}
// here images will appear chosen by computer
function computerimg() {
    cmove = computerMove();
    let computerImage = document.getElementById("computerImage");
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
// function for deciding the winner for player uses
function subWinner() {
    winn.innerHTML = ("Winner : " + person);
    star[pScore].className = 'fas fa-star star';
    star[pScore].style.color = 'gold';
    pScore++;
    chance++;
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
                    star[cScore].className = "fas fa-star star";
                    star[cScore].style.color = 'gold';
                    cScore++;
                    chance++;
                }
            }
    if (chance == 3) {
        controls.style.display = 'none';
    }
    announcement();
}
// function to show paper
function paper() {
    myImage.src = 'paper.gif';
    computerimg();
    winner(1);
}
// function to show scissors
function scissor() {
    myImage.src = 'scissor.gif';
    computerimg();
    winner(2);
}
// function to show rock
function rock() {
    myImage.src = 'rock.gif';
    computerimg();
    winner(3);
}
newGame.addEventListener('click', myFunction);
pape.addEventListener('click', paper);
scisso.addEventListener('click', scissor);
roc.addEventListener('click', rock);
// sound code goes here 
sound.addEventListener('click', () => {

    let myAudio = document.getElementById('myAudio');
    if (myAudio.muted) {
        sound.className = "fa-solid fa-volume";
        myAudio.muted = false;
        sound.style.color = "white";
    } else {
        sound.className = "fa-solid fa-volume-xmark";
        myAudio.muted = true;
        sound.style.color = "red";
    }
});

// winner alert code goes here 
btn2.addEventListener('click', () => {
    winnerAlert.style.display = 'none';
})
