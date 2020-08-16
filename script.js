/**
 * This is a simple stone paper scissor game
 * played against computer.
 * Date:07/31/2020
 * @author:Ruchik Chaudhari
 */

 //computer's choice
 function computerPlay(){

    let options=["stone","paper","scissors"];
    //get the random selection from the array
    let computerSelection=Math.floor((Math.random()*options.length));
    console.log("CS Selection= "+options[computerSelection].toLowerCase());
    return options[computerSelection].toLowerCase();
}

 //player's choice
 function playerPlay(){
     //get the player's selection
    let userSelection = prompt("What's your selection?")
    return userSelection.toLowerCase();
}

 //one round of game
 function gameRound(computerSelection,userSelection){

     //conditions for winning
    if((userSelection==="stone"&&computerSelection==="scissors")
        ||(userSelection==="scissors"&&computerSelection==="paper")
        ||(userSelection==="paper"&&computerSelection==="stone")){
            console.log("You Won!")
            return "Won";
    }

    //conditions for loosing
    else if((userSelection==="stone"&&computerSelection==="stone")
        ||(userSelection==="scissors"&&computerSelection==="scissors")
        ||(userSelection==="paper"&&computerSelection==="paper")){
            console.log("It's a tie");
            return "Tie";
    }

    //else you lose
    else{
        console.log("You Lost")
        return "Lost";
    }
 }

 //five rounds
 function gameRounds(){

    
     let countWon=0, countTie=0, result;

     //play the game 5 times
    for(i = 1; i < 6; i++){
        result = gameRound(computerPlay(),playerPlay());
        if (result ==="Won"){
            countWon++;
        }
        else if(result=="Tie"){
            countTie++;
        }
    }

    //Return the results
    if (countWon >= 3){
        return "Congratulations you won";
    }
    else if( (countTie === 1) && (countWon==2) ){
        return "Its a Tie, try agian";
    }
    else{
        return "You lost, try again";
    }
}
console.log(gameRounds());