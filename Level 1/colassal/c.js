const readlineSync = require("readline-sync");
const name = readlineSync.question("What is your name? ");
console.log(name);
console.log(`Welome ${name} to my Rpg game! You have multiple options to choose from. But first:`);
const playerName = readlineSync.question("What shall you name your character?")
console.log(playerName)
function Player(name,inventory,hp){
  this.playerName = name
  this.inventory = []
  this.hp = 100
}
isAlive = true

console.log(`Thats new, ${playerName} start off with 100hp, in this game, you will fight a variety of enimies, and the goal is to fight the big boss at the end.`)

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 function Enemy(enemyName, enemyHp ){
  this.enemyName = enemyName
  this.enemyHp = enemyHp
 
  }
  function createEnemy () {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0){
        return new Enemy("itty bitty Kitty Cat", 100,);
    } else if (randomNum === 1){
        return new Enemy("Famous Flying Squirrel", 100,);
    } else {
        return new Enemy("Mighty Mouse", 100,);
    }
}
  // function BigBoss(enamyAttack, enemyHp){
  //   enemyAttack =Math.floor((Math.random() * 20) + 1)
  //   enemyHp = 200
  // }
 
  function enemyDrop() {
    var prize = ["Gold coin", "Silver coin", "Bronze coin", "suspicious food"];
    var randomPrize = randomNum(0, 2);
    var newPrize = prize[randomPrize];
    player.inventory.push(newPrize);
    return newPrize;
    function suspiciousFood(){
      var choice = readlineSync.keyInYN('the enemy dropped some suspicious food,would you eat it? Type Y for yes, and type N for no')
      if(choice == "n"){
        console.log('Perhaps that was the wise choice')
      }
    else if(choice =="y"){
      let instaDeath = Math.floor((Math.random() * 2) +1)
      if(suspiciousFood === 1){
        console.log('You ate the suspicious food ... it was poisioness, and you died a very painful death')
        isAlive= false
      }
      else{
        let hpRestored = playerHealth + Math.floor((Math.random)*2)
        console.log('You ate the food ... it was surprisingly good! Youve restored'+hpRestored+'hp')
      }
  
    }
    }
    }
   
  function attackPower(attackPow) {
    attackPow =  Math.floor((Math.random() * 10) + 1)
    return attackPow;
  }
  function enemyAttack(enemyPow){
    enemyPow = Math.floor((Math.random() * 10) + 1)
    return enemyPow
  }
  function playerHealth() {
    Player.hp = Player.hp - attackPower();
    return Player.hp;
  }
  function enemyHealth() {
    Enemy.hp = Enemy.hp - attackPower();
    return Enemy.hp;
  }
  function playerAttack() {
    if(Player.hp > 0) {
      playerAttack();
    }
  }

  function enemyAttack() {
  if(Enemy.hp > 0) {
    enemyAttack(playerAttack);
  }
}
function checkInventory() {
    console.log(`This is ${player} invetory`);
  }
  function doesEnemyAppear() {
    var randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 2) {
      return true;
    } else {
      return false;
    }
  }
  function run() {
    runOrMiss = Math.floor((Math.random() * 2) + 1)
    if(runOrMiss ===1){
      console.log('You tried to run like a coward, but fell and died. Try again?')
    
    }
    else{
      console.log('your cowardice allowed you to live another day')}
    }
  // var input = readline.keyIn('Are you ready? Press W to start walking and i to check your invetory')
  // if(input === 'i'){
  //   console.log(invetory)

  // }
  // else if(input==='w'){
  //   while(isAlive = true){
  //     if(doesEnemyAppear == false){
  //     console.log('you took a few steps and nothing happened. How boring.')
  //   }
  // else if(doesEnemyAppear == true){}
    
   
   
  //   }
  function fight () {
    const fightRun = readlineSync.question('Would you like to fight [f], or run [r]?');
    console.log (" ")
    if (fightRun === "f"){
        enemyAttack ();
    } else if (fightRun === "r"){
        console.log ("You must be scared, you are running really fast!")
       run ();
    } else {
        console.log ("Its not super hard you must make a selection")
    }
}
function walking(input){
  if (input == "w") {
    let randomEnemy = Math.floor(Math.random() * 4)
    if (randomEnemy === 2) {
        let currentEnemy = createEnemy();
        console.log(`You have encountered The ${currentEnemy.name}!`)
        fight ();
    } if (randomEnemy === 1) {
        console.log ('Threat level is low, but you are never totally safe ')
    } else if (randomEnemy === 0) {
        console.log('Keep walking')
    }
} else if (input === "p"){
    console.log (playerInfo)
}
}
while (isAlive == true) {
  const input = readlineSync.question("Press 'w' to walk, or press 'p' or type 'print' to check the player inventory and HP. ")
  walking (input);
}
