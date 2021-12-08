const readlineSync = require('readline-sync');
const welcome = readlineSync.question('Welcome to My rpg game! The goal is to survive for as long as you can!  Please press enter to begin.')
console.log(welcome)
const name = readlineSync.question('What is your name? ')
console.log('Hi ' + name + '! Lets see how long you will survive, my guess is only about 2 fights!')
let isAlive = true;
function randomDamage (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
let playerInfo = {
    name: name,
    hp: 100,
    items: ["sword ", "Bow" ],
    damage: randomDamage(5, 20),
}
function Enemy (name, hp,) {
    this.name = name
    this.hp = hp
}
function createEnemy () {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0){
        return new Enemy("The Undefined", 100,);
    } else if (randomNum === 1){
        return new Enemy("The Unknown", 100,);
    } else {
        return new Enemy("The Letter A", 100,);
    }
}
function walk (input) {
    if (input == "w") {
        let randomEnemy = Math.floor(Math.random() * 4)
        if (randomEnemy === 2) {
            let currentEnemy = createEnemy();
            console.log(`You have encountered ${currentEnemy.name}!`)
            fight ();
        } if (randomEnemy === 1) {
            console.log ('Yu took a peaceful walk... How boring')
        } else if (randomEnemy === 0) {
            console.log('Keep walking')
        }
    } else if (input === "p"){
        console.log (playerInfo)
    }
}
function run () {
    let runChance = Math.floor(Math.random () * 4)
    if (runChance > 3) {
        console.log ("Your cowardice saved you ... How lucky")
    } else if (runChance <= 3) {
        console.log ("You tried to run... but the enemy caught you")
        attack ();
    }
}
function fight () {
    const fightRun = readlineSync.question('Would you like to fight [f], or run [r]?');
    console.log (" ")
    if (fightRun === "f"){
        attack ();
    } else if (fightRun === "r"){
        console.log ("You must be terrified, you are running really fast!")
       run ();
    } else {
        console.log ("What are you doing?")
    }
}
function attack () {
    let fightEnemy = Math.floor(Math.random() * 5)
    if (fightEnemy === 1) {
        console.log('You are done for now, you encountered a known enemy ')
        playerDies();
    } else {
        console.log ("You have won against the enemy! You gained 10 HP and a new item!")
        playerInfo.hp = playerInfo.hp + 10;
        playerInfo.items = playerInfo.items + "The uncoaded, the worthy, may be added";
        console.log(`The damage you received was ${playerInfo.damage}!`)
    }
}
function playerDies () {
    isAlive = false
    console.log ("Game Over, you sure didnt last very long. Try to last longer next time")
}
while (isAlive == true) {
    const input = readlineSync.question("Press 'w' to walk, or press 'p' or type 'print' to check the player inventory and HP. ")
    walk (input);
}
