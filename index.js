

function getDiceRoll(){
    var randomNumber = Math.floor((Math.random()*6) + 1);
    return randomNumber;

}

function setDiceImg(rollNumber,dice){
    if (rollNumber === 1){
        dice.setAttribute("src","images/dice1.png");
    }
    else if(rollNumber === 2){
        dice.setAttribute("src","images/dice2.png");
    }
    else if(rollNumber === 3){
        dice.setAttribute("src","images/dice3.png");
    }
    else if(rollNumber === 4){
        dice.setAttribute("src","images/dice4.png");
    }
    else if(rollNumber === 5){
        dice.setAttribute("src","images/dice5.png");
    }
    else {
        dice.setAttribute("src","images/dice6.png");
    }

}

function rollDices(){

    var dices = document.querySelectorAll(".dice img"); // dice[0] is dice 1, dice[1] is dice 2

    var diceOneNumber = getDiceRoll();
    var diceTwoNumber = getDiceRoll();

    setDiceImg(diceOneNumber,dices[0]);
    setDiceImg(diceTwoNumber,dices[1]);

    if(diceOneNumber > diceTwoNumber){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (diceOneNumber < diceTwoNumber){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!!";
    }


}

var rollBtn = document.querySelector("button");

rollBtn.onclick = function(){
    rollDices();
}