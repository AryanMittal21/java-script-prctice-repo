let a = parseInt(prompt("Enter a number"))
let b = parseInt(prompt("Enter a number"))

// to removing forgiving nature of java script throwing error

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry You Don't Have Brain")// error will stop our code
}
// different errors
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
let sum = a + b
console.log("the sum is",sum);


// handling error to handle errors by us
try {
    console.log("the sum is",sum*x);// x not defined
} catch (error) {
    console.log('Error aa gya re bhidu isko ek kantap marke fix kar'); 
}finally{
    console.log('files are being closed and db connections are being closed');
}

// use o finally appered in functions
// if there is a return before finally in a function then also finally will exicute

// read notes







