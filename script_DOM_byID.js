console.log("Aryan Mittal");

let boxes = document.getElementById("3");
console.log(boxes);

console.log(boxes.style.backgroundColor="red");

/* .box is known as css selector*/
document.querySelector(".box").style.backgroundColor = "green"; // always select first box only

console.log(document.querySelectorAll(".box")); // returns html colection

// document.querySelectorAll(".box").style.backgroundColor = "green"; this will never work because this is html collection

//we have to use for each loop

// document.querySelectorAll(".box").forEach(element => {
//     element.style.backgroundColor = "green";    
// });

document.body.getElementsByTagName("div"); // return all div's
