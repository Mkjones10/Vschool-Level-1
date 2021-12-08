var s ="hello"
var t ="hello"
var str1= s.toUpperCase()
var str2 = t.toLowerCase()
var k = str1.concat(str2)
console.log(k)
function middleIndex(k){
    var i = k.replace("","").length
    return Math.floor(i /2)
}
console.log(middleIndex(k))
var c = k.slice(5)
console.log(c)
var p = 'candy' 
function half(parameter){
    return parameter.toUpperCase()+'' + parameter.toLowerCase() 
}
console.log(half(p ))
