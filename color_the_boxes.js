// Given 5 boxes
// Assign a random color and randon background to each box using DOM concepts
// heigth 45px 
// weidth 45px
//border 2px solid black

// let us take 7 colours for this task 
// grey, black, blue, green, yellow, orange, red

// let randArr1 = [];
// for (let index = 0; index < 5; index++) {
//     let random = Math.random();
//     randArr1.push(random);
// }
// console.log(randArr1);
// let color1 = []
// for (const value of randArr1) {
//     if(value<0.14){
//         color1.push("grey");
//     }
//     else if(value<0.28){
//         color1.push("black");
//     }
//     else if(value<0.42){
//         color1.push("blue");
//     }
//     else if(value<0.56){
//         color1.push("green");
//     }
//     else if(value<0.70){
//         color1.push("yellow");
//     }
//     else if(value<0.84){
//         color1.push("orange");
//     }
//     else{
//         color1.push("red");
//     }
// }
// console.log(color1);


// for (let index = 0; index < 5; index++) {
//     document.getElementById(index.toString()).style.color = color1[index];
// }



// let randArr2 = [];
// for (let index = 0; index < 5; index++) {
//     let random = Math.random();
//     randArr2.push(random);
// }
// console.log(randArr2);
// let color2 = []
// for (const value of randArr2) {
//     if(value<0.14){
//         color2.push("grey");
//     }
//     else if(value<0.28){
//         color2.push("black");
//     }
//     else if(value<0.42){
//         color2.push("blue");
//     }
//     else if(value<0.56){
//         color2.push("green");
//     }
//     else if(value<0.70){
//         color2.push("yellow");
//     }
//     else if(value<0.84){
//         color2.push("orange");
//     }
//     else{
//         color2.push("red");
//     }
// }
// console.log(color2);


// for (let index = 0; index < 5; index++) {
//     document.getElementById(index.toString()).style.backgroundColor = color2[index];
// }



// best way 

let boxes = document.getElementsByClassName("box");
console.log(boxes); // provides an html collection

console.log(Array.from(boxes)); // convert that collection to array 

// now we can apply foreach loop on array 

function randomColor(){
    let a = Math.random();
    let val1 = parseInt(255*a); // to genrate a random number form a to b we can use algorithm [a+rand(b-a)]
    let b = Math.random();
    let val2 = parseInt(255*b);
    let c = Math.random();
    let val3 = Math.ceil(255*c);// at place of parseInt we can also use Math.ceil 
    return `rgb(${val1},${val2},${val3})`;
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = randomColor();
    e.style.color = randomColor();
})


