// IIFE is used to make an imigiately invoked function expression
async function sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 2000);
    })
}

function sum(a, b, c) {
    return a + b + c;
}

(async function main(){
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // Destructuring
    // let x,y = [1,5];
    // console.log(x, y);
    // this will not provide the correct answer first it will undefined
    let [x, y, ...rest] = [1, 5, 7, 8, 9, 10]; // if we dont write those triple dots then it will return 7 to rest and others are ignored
    console.log(x, y, rest); // this will provide correct answer
    let obj = {
        a:1,
        b:2,
        c:3
    }

    console.log(obj);

    let {a, b} = obj // this will remove c from object
    console.log(a, b);


    // spread syntax

    let arr = [1,4,6];
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr)); // this is a spread operator
    const obj2 = [...arr];
    console.log(obj2);
    

    // hoisting only by using var to define constants  var kahin bhi define kero wo error nhi dega not to useful 

    

}) ()


















