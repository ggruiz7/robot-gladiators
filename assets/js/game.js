// Game States
// "WIN" - player robot has defeated all enemy robots
//  * fight all enemy robots
//  * defeat each enemy robot
// "LOSE" - player robot's health is 0 or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

/* you can also log multiple values at once like this
   console.log(playerName, playerHealth, playerAttack); */

var enemyNames = ["ass_master69", "BIG BEN", "His Airness"];
var enemyHealth = 50;
var enemyAttack = 12;

/* console.log(enemyNames);
console.log(enemyNames[0]); console.log(enemyNames[1]); console.log(enemyNames[2]); console.log(enemyNames.length);
for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
} */

// alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
    // repeat and execute as long as the enemy  and player robots are alive
    while (playerHealth > 0 && enemyHealth > 0) {
        //  && means set two conditions that must both resolve to true to execute
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
        // console.log(promptFight);
        
        // if the player chooses to skip
        if (promptFight === "SKIP" || promptFight === "skip") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to be a coward?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to be a slimy rat! G'bye.");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10
                console.log("player money", playerMoney);
                break;
            }
            // if no (false), ask question again by running fight() again
            /* else {
                fight();
            } */
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // log a resulting message to the console so that we know that it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health!");
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            // leave while loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + " has " + enemyHealth + " health.");
        }

        // subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
        playerHealth = playerHealth - enemyAttack;
        // log a resulting message to the console so that we know it worked
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health!"); 
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " has " + playerHealth  + " health.")
        }
}
}; 

var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    debugger;
    // fight(); , replace this function call with:
    for (var i = 0; i < enemyNames.length; i++) {
        // if player is still alive, keep fighting
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            // pick a new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting a new fight
            enemyHealth = 50;
            // use debugger to pause script from running and see what's going on with the code
            // debugger;
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }
        // if player isn't alive, stop the game
        else {
            window.alert("DEAD. GAME OVER");
            break;
        }
    }
    // after the loop ends, the player is either out of health or out of enemies to fight
    endGame();
}

// function to end the entire game
var endGame = function(){
    // if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("YOU SURVIVED! SCORE:");
    }
    else {
        window.alert("DEAD. GAME OVER")
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?")

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("coward")
    }
}

startGame();
