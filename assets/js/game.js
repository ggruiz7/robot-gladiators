var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    console.log(promptFight);
    
    // if player chooses to fight, then fight
    if (promptFight === "FIGHT" || promptFight === "fight") {
    // subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so that we know that it worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health!");

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
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
    }
    else {
        window.alert(playerName + " has " + playerHealth  + " health.")
    }
} 

// if the player chooses to skip
else if (promptFight === "SKIP" || promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to be a coward?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to be a slimy rat! G'bye.");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
} 
else {
    window.alert("You must choose a valid option fool.")
}
};

fight();