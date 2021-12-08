var button = document.querySelector('button')


button.addEventListener('mouseover',()=>{
    button.style.backgroundColor ="blue"
})
button.addEventListener('mouseout',()=>{
    button.style.backgroundColor ="grey"
})
button.addEventListener('dblclick',()=>{
    button.style.backgroundColor ="green"
})
button.addEventListener('mousedown',()=>{
    button.style.backgroundColor ="red"
})
button.addEventListener('mouseleave',()=>{
    button.style.backgroundColor ="orange"
})
button.addEventListener('mouseup',()=>{
    button.style.backgroundColor ="yellow"
})
window.addEventListener('keydown',checkKeyPress,false);
function checkKeyPress(key){
if (key .keyCode == 82){
    button.style.backgroundColor="red"
}
if (e.keyCode == 71){
    box.style.backgroundColor = "green"
}
if (e.keyCode == 66){
    box.style.backgroundColor = "blue"
}
}