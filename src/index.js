var button=document.getElementById("btn");
var mode=document.querySelector(".mode");
button.addEventListener('click',function(){
    var element=document.body;
    element.classList.toggle("dark-mode")
    mode.innerText="dark mode"
    // event.stopPropagation();
})
