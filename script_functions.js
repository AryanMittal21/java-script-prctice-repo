function nice(name) {
    console.log("Hey "+ name + " you are nice!")
    console.log("Hey "+ name + " you are good!")
    console.log("Hey "+ name + " your tshirt is nice!")
    console.log("Hey "+ name + " your idea ia nice too!")
}

nice("Aryan");

function sum(a, b) {
    console.log(a+b);
    return a + b;
}

result = sum(34, 36);

console.log("the sum of 34 and 36 is:", result);

// default parmeter 

function sum(a, b, c=3) {
    return a + b + c;
}

result1 = sum(34, 36);
result2 = sum(34, 36, 10);

console.log("the sum of 34, 36 and default c is:", result1);
console.log("the sum of 34, 36 and 10 is:", result2);

// Arrow functions

const func1 = (a)=> {
    console.log("I am a arrow function", a);
}

func1(34);