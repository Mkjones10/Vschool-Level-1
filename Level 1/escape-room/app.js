const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(name);
console.log(`Welome ${name} to my escape room! You have multiple options to choose from, pivk the wrong one however, and you will die!`);
let isAlive = true;
let hasKey = false;
let locked =true;

while(locked & isAlive){
    let options =[ 'open door', 'put hand in hole', 'look for key' 
    ]
    const choice = readline.keyInSelect(options, "choose wisely");
     if(choice ===0) {
        console.log('you checked the door and found that the door was locked, what do you do now?')
        isAlive = true;
        hasKey =false;
        locked = true;
     
    
    }
    else if(choice ===1){
        console.log('You have decided to stick your hand in the small hole in the wall, and now you have no hand. You proceeded to bleed to death. GAME OVER')
        isAlive = false;
    }
    else if(choice ===2) {
        console.log('you have picked the correct choice, now what will you do?')
        hasKey =true;
        isAlive=true;
        locked =false;
    }


}
while(isAlive===true & hasKey===true){
    let options =[ 'escape', 'sleep', 'put hand in hole'];
    const choice = readline.keyInSelect(options, "choose wisely");
    if(choice===0){
        console.log('Congratulations, you have escaped!')
        isAlive=false;
    }   
    else if(choice ===1){
        console.log('You decided to go to sleep, and never woke up again. GAME OVER')
        isAlive = false;
    }
    else if(choice ===2) {
        console.log('You have decided to stick your hand in the small hole in the wall, and now you have no hand. You proceeded to bleed to death. GAME OVER')
        isAlive = false;

}
}