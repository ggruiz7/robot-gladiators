var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value
};

// alert to begin game
window.alert("Welcome to Robot Gladiators!");

var fight = function(enemy) {

    // repeat and execute as long as the enemy and player robots are alive
    while (playerInfo.health > 0 && enemy.health > 0) {
    // set two conditions that must both resolve to true to execute with &&

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'.")
        
        // if the player chooses to skip
        if (promptFight === "SKIP" || promptFight === "skip") {

            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to be a coward?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to be a slimy rat!");

                // subtract money from playerInfo.money for skipping
                playerInfo.money = playerInfo.money - 10
                console.log("player money", playerInfo.money);
                break;
            }
            // if no (false), ask question again by running fight() again
            /* else {
                fight();
            } */
        }    

        else if  (promptFight === "FIGHT" || promptFight === "fight") {    

            // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);

            // log a resulting message to the console so that we know that it worked
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health+ " health!");

            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = Math.max(0, playerInfo.money + 20);

                // leave while loop since enemy is dead
                break;
            }
            else {
                window.alert(enemy.name + " has " + enemy.health + " health.");
            }

            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health!"); 
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else {
                window.alert(playerInfo.name + " has " + playerInfo.health  + " health.")
            }
            
        }
        
        else {
            window.alert("Enter a valid option fool.")
        }
    }
}; 

// function to start a new game
var startGame = function() {

    // reset player stats
    playerInfo.reset();
    
    // fight(); , replace this function call with this for loop
    for (var i = 0; i < enemyInfo.length; i++) {

        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {

            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('ROBOT GLADIATORS! Round ' + (i + 1));
            
            // pick a new enemy to fight
            var pickedEnemyObj = enemyInfo[i];
            
            // reset enemy health  before starting a new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            
            // pass the pickedEnemyObj variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
            
            // if we're not at ehe last enemy in the array, and player is still alive
            if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
                //ask if the player wants to use the store before the next round
                var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?")
                
                // if yes, take them to the store function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        // if player isn't alive, stop the game
        else {
            window.alert("DEAD. GAME OVER.");
            break;
        }
    }
    // after the loop ends, the player is either out of health or out of enemies to fight
    endGame();
}

// function to end the entire game
var endGame = function(){

    window.alert("Battle Over.")
    
    // if player is still alive, player wins
    if (playerInfo.health > 0) {
        window.alert("YOU SURVIVED! SCORE: " + playerInfo.money);
    }
    else {
        window.alert("DEAD. GAME OVER.")
    }
    
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Play again?")
    
    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Coward.")
    }
}

// go to shop between battles function
var shop = function() {

    // ask the player what they'd like to do
    var shopOptionPrompt = window.prompt("REFILL your health, UPGRADE your attack, or LEAVE the store? Enter one: 'REFILL', 'UPGRADE', or 'LEAVE.'");
    
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case 'REFILL':
            playerInfo.refillHealth();
            break;
                
        case "upgrade":
        case 'UPGRADE':
            playerInfo.upgradeAttack();
            break;
            
        case 'leave':
        case 'LEAVE':
            window.alert("Leaving the store.");

            // do nothing so function will end
            break;
            
        default:
            window.alert("Choose a valid option fool!");

            //call shop() again to force player to pick valid option
            shop();
            break;
    }
}
    
var playerInfo = {
    name: window.prompt("What is your Robot's name?"),
    health: 100,
    attack: 10,
    money: 10,

    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    }, // coma!

    refillHealth: function() {
        if (this.money >= 7) {
            window.alert(this.name + "'s health has been refilled by 20 for 7bc.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You're too poor, rat.")
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert(this.name + "'s attack has been upgraded by 6 for 7bc");
            this.attack += 6;
            this.money-= 7;
        }
        else {
            window.alert("You/re too poor, rat.")
        }
    },
};
    
/* you can also log multiple values at once like this
   console.log(playerInfo.name, playerInfo.health, playerInfo.attack); */
    
var enemyInfo = [
    {
        name: "His Airness",
        attack: randomNumber(10, 12),
    },
    {
        name: "BIG BEN",
        attack: randomNumber(10, 13),
    },
    {
        name: "ass_master69",
        attack: randomNumber(10, 14),

        /* var enemy = {
        name: "Roborto",
        attack: randomNumber(10, 14),
        shield: {
            type: "wood",
            strength: 10
        }
        }; */
    },
];

// start first game when page loads    
startGame();