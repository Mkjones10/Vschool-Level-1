var h1 = document.createElement('h1')
var h2 = document.createElement('h2')
var span = document.createElement('span')
var title = document.createTextNode('JavaScript Made This')
var myName = document.createTextNode('Maxine Jones')
var wrote = document.createTextNode('Made the Javascript code!')
h1.appendChild(title)
span.appendChild(myName)
span.classList.add("name")
h2.appendChild(span)
h2.appendChild(wrote)
document.body.prepend(h2)
document.body.prepend(h1)
var messages = document.querySelectorAll(".message")
var newMessages =["What do you call a fake noodle" , "I dont know, what?", "An Inpasta","lmao"]
for (i =0; i <messages.length;i++) {
    console.log(this.messages[i])
    this.messages[i].innerText = newMessages[i];
}

var clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click",function(e){

    for (i = 0; i < messages.length; i++){
        messages[i].remove();
    }})
    var blueBrownTheme = true;
var redBlackTheme = false;
var dropDown = document.querySelector("#theme-drop-down")

dropDown.addEventListener("change", function(e){
    var main = document.querySelector("#main")
    var messages = document.querySelector(".messages")

    if (blueBrownTheme){
        main.style.backgroundColor = "black"
        messages.style.backgroundColor = "red"
        redBlackTheme = true
        blueBrownTheme = false
    } else {
        main.style.backgroundColor = "blue"
        messages.style.backgroundColor = "brown"
        redBlackTheme = false
        blueBrownTheme = true
    }
    
    
    console.log(this.nextElementSibling)
})


