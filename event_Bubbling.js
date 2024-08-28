document.querySelector(".child").addEventListener("contextmenu", (e)=>{
    e.stopPropagation()// this will stop bubbling
    alert("Don't dare to Right click the Child.")
});

document.querySelector(".childContainer").addEventListener("contextmenu", ()=>{
    alert("Don't dare to Right click the childContainer.");
});

document.querySelector(".container").addEventListener("contextmenu", ()=>{
    alert("Don't dare to Right click the container.");
});


// set intetrval

function randomColor(){
    let a = Math.random();
    let val1 = Math.ceil(255*a); // to genrate a random number form a to b we can use algorithm [a+rand(b-a)]
    let b = Math.random();
    let val2 = Math.ceil(255*b);
    let c = Math.random();
    let val3 = Math.ceil(255*c);// at place of parseInt we can also use Math.ceil 
    return `rgb(${val1},${val2},${val3})`;
}

let a = setInterval(() => {
    document.querySelector(".child").style.background = randomColor();
},1000) // repeat event after a particular time

console.log(a);

// clearInterval(a); // to stop the interval

// let b = setTimeout(() => {
//     document.querySelector(".child").style.background = randomColor();
// },1000) // exicute the event after a given this only once time

// clearTimeout(a); // to stop the Timeout