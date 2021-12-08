/*
    Write a function that takes an array of numbers and returns the largest (without using Math.max())
        
        largest([3, 5, 2, 8, 1]) // => 8
*/
arr = [3, 5, 2, 8, 1]
function largest(arr) {
    num = arr[0]
    for (var i = 0, len =arr.length; i <len;i++) {
        if(arr[i]> num){
            num = arr[i]
        }
        
    }
    return num
}
console.log('1. The biggest number in array [' + arr + '] is: ' + largest(arr))

/*
    Write a function that takes an array of words and a character and return each word that has that letter present.
        lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]*/
        
str = ['!']
arr = ["#3", "$$$", "C%4!", "Hey!"]
 var newArr = lettersWithStrings(arr,str)
function lettersWithStrings(arr, str) {
    let newArr = []
    for (var a = 0, len = arr.length; a < len; a++) {
        // if "!" found in the array's chosen string
        if (arr[a].includes('!')) {
            // add the string to newArr
            newArr.push(arr[a])
        }
    }

    return newArr
}
console.log(newArr)

/*
    Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
    
        isDivisible(4, 2) // => true
        isDivisible(9, 3) // => true
        isDivisible(15, 4) // => false
*/

function divisable(num1,num2) {
    if(num1%num2 === 0){
        console.log(''+num1+'is divisable by'+num2+'.')
       
    }
    else{
        console.log("these numbers aren't divisable")
    }
    
}

divisable(4, 2);

divisable(9, 3)
divisable(15, 4)

