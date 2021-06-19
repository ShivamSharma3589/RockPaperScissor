// here my javascript goes

let person;     //global declared variable for holding player's name 
let cmove,cScore=0,pScore=0;

// function to get the user name is here.
function myFunction() {
    person = prompt("Please enter your name", "Player");
    cScore=0;
    pScore=0;
    document.getElementById("winner").innerHTML="Winner...?";
    document.getElementById("playerScore").innerHTML=pScore;
    document.getElementById("computerScore").innerHTML=cScore;
    if (person != null) {
      document.getElementById("name").innerHTML =
       person ;
       document.getElementById("controls").style.display="block";
    }else{
        person="Player";
        document.getElementById("name").innerHTML = person ;
    }
}

// here is the function to get the move from the computer
function computerMove(){
    let x = Math.floor((Math.random() * 3) + 1);
    return x;
}

// here images will appear chosen by computer
function computerimg(){
    cmove = computerMove();
    if(cmove==1){
        document.getElementById("computerImage").src='paper.gif';
    }else
    if(cmove==2){
        document.getElementById("computerImage").src='scissor.gif';
    }else
    if(cmove==3){
        document.getElementById("computerImage").src='rock.gif';
    }
}

// function for deciding the winner 
function subWinner(){
    let print=document.getElementById
    ("winner");
    print.innerHTML=("Winner : " + person);
    pScore+=1;
    document.getElementById("playerScore").innerHTML=pScore;
}

// function for deciding the winner 
function winner(player){
    let draw="Draw";
    let com="Winner: computer";
    if((player==1)&& (cmove==3)){
        subWinner();
    }else
    if((player==2)&& (cmove==1)){
        subWinner();
    }else
    if((player==3)&& (cmove==2)){
        subWinner();
    }
    else{
        if(player==cmove){
            document.getElementById("winner").innerHTML=draw;
        }else{
            document.getElementById("winner").innerHTML=com;
            cScore+=1;
            document.getElementById("computerScore").innerHTML=cScore;
        }
    }
}

// function to show paper
function paper(){
    document.getElementById('myImage').src='paper.gif';
    computerimg();
    winner(1);
}

// function to show paper
function scissor(){
    document.getElementById('myImage').src='scissor.gif';
    computerimg();
    winner(2);
}

// function to show paper
function rock(){
    document.getElementById('myImage').src='rock.gif';
    computerimg();
    winner(3);
}