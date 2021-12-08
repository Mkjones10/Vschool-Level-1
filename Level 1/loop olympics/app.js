for (i = 0; i < 10; i++){
       console.log(i);}
for(i=9; i>=0;i--){
    console.log(i)
}
var fruit = ["banana", "orange", "apple", "kiwi"]
for(i =0; i<fruit.length; i++){
    console.log(fruit[i])
}
arr = [];
for (i = 0; i < 10; i++){
   arr.push(i);
 }
 console.log(arr)
  for (i = 0; i <= 100; i++){  if (i % 2 === 0){
       console.log(i)   
    }
}
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (i = 0; i < fruit.length; i++){
 if (i % 2 === 0){
      fruitArr.push(fruit[i])
}
}
console.log(fruitArr)
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  var names = [];
  var occupation = [];
  for (i = 0; i < peopleArray.length; i++){
      names.push(peopleArray[i].name)
      occupation.push(peopleArray[i].occupation)
  }
  console.log(names)
  console.log(occupation)
  
var evenNames = [];
var oddOcc = [];
  
for (i = 0; i < peopleArray.length; i++){
       if (i % 2 === 0){
           evenNames.push(peopleArray[i].name)
        } else {
   oddOcc.push(peopleArray[i].occupation)
  }
 }
  console.log(evenNames)
  console.log(oddOcc)