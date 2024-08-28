let button = document.getElementById("btn");
// https://developer.mozilla.org/en-US/docs/Web/Events 
// events Mdm
button.addEventListener("click", ()=>{
    alert("I was clicked. Yayy!!");
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked </b> Enjoy your click!";
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't dare to Right click.");
})

document.addEventListener("keydown", (e)=>{
    console.log(e);
})