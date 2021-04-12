

function getDiceRoll(){
    var randomNumber = Math.floor((Math.random()*6) + 1);
    return randomNumber;

}

function setDiceImg(rollNumber,dice){
    dice.setAttribute("src","images/dice"+rollNumber+".png");

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