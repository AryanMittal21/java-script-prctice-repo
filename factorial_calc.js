// method 1 using array and reduce 

let num = parseInt(prompt("Enter the number for which you want to find factorial value"));

let arr = [1];
for (let index = 2; index <= num; index++) {
    arr.push(index);   
}
console.log(arr);


const reduce = (a, b) =>{
    return a*b;
}

console.log(`The factorial of ${num} is ${arr.reduce(reduce)}`);


// method 2 using loops

let answer = 1;
for (let index = 2; index <= num; index++) {
    answer *= index;
}
console.log(`The factorial of ${num} is ${answer}`);


// there is an easy way of making arr form 1 to n 

// method 3 best method 
function factorial(num){
    let arr = Array.from(Array(num+1).keys()); //this is the fastest way of making a array from 0 to number if we dont add 1 in number then it will return till number -1.
    arr.shift();
    console.log(arr);
    let c = arr.reduce((a, b)=>{
        return a*b;
    })
    return c;
}
factorial(num);
