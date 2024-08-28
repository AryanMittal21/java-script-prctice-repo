// create a faulty calculator using javascript
// This faulty calculator does following:
// It takes two numbers as input from the user 
// it performs wrong operations as follows
// it performs wrong operations 10 percent of the times
// + --> -
// * --> +
// - --> /
// / --> **

// random number generate
let num1 = parseInt(prompt("enter first number"));
let operation = prompt("enter the operation to be performed");
let num2 = parseInt(prompt("enter the second number"));

let a = Math.random();
console.log(a);

// basic but lengthy method 
// if(a>0.1){
//     if( operation == '+'){
//         console.log(num1+num2);
//     }
//     else if( operation == '*'){
//         console.log(num1*num2);
//     }
//     else if( operation == '-'){
//         console.log(num1-num2);
//     }
//     else if( operation == '/'){
//         console.log(num1/num2);
//     }
//     else {
//         console.log("Provide a valid operation  + - * / are only valid operations");
//     }
// }

// else {
//     if( operation == '+'){
//         console.log(num1-num2);
//     }
//     else if( operation == '*'){
//         console.log(num1+num2);
//     }
//     else if( operation == '-'){
//         console.log(num1/num2);
//     }
//     else if( operation == '/'){
//         console.log(num1**num2);
//     }
//     else {
//         console.log("Provide a valid operation  + - * / are only valid operations");
//     }
// }


// best method 

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (a> 0.1){
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
}

else {
    operation = obj[operation];
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
}