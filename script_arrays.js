let arr = [1, "aryan", true, "bits pilani", 9];
console.log(arr);
console.log(arr.length);

// array is mutable 

console.log(arr[3]);

arr[1] = "Aryan";
console.log(arr);

console.log(typeof arr);

// Method in arr 

console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop()); // this returns last element of the array and removes it from array
console.log(arr);
console.log(arr.push(9)); // this will add the data in bracket at the very end of an array and return final length of that array
console.log(arr);
console.log(arr.push("Harry"));
console.log(arr);
console.log(arr.shift()); // this will extract or remove 1 element of array and return it
console.log(arr);
console.log(arr.unshift(1)); // this will add data of bracket at very beginning of array and return updated length
console.log(arr);
console.log(delete arr[5]); // delete an element from an array array size will remain same the deleted emement will be represented as empty and this will return true or false
console.log(arr);

let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];
let a4 = a1.concat(a2,a3);
console.log(a4);//this method do not change the array returns a new array

console.log(a4.splice(1,2)); // delete 2 element from index 1 will return deleted elements in this case 2,3
console.log(a4);

console.log(a4.splice(1, 2, 2, 3, 4, 5)); // delete 2 element from index 1 will return deleted elements but also add 2,3,4,5 at the index1 so it can be used for both cutting and adding
console.log(a4);

// loops on arrays

for (let index = 0; index < a4.length; index++) {
    const element = a4[index];
    console.log(element);
}

// for each loops on arrays
a4.forEach((value, index, a4)=>{
    console.log(`the value present at index ${index} is ${value}`);
})

// for in loop for arrays

for (const value of a4) {
    console.log(value);// returns the values present at each index
}

// map filter reduce

// map use to create a new array by performing same operation on each element single line method

let a5 = [1,2,3,4,5,6,7,8,9,10];
console.log(a5);
// let newArr = [];
// for (let index = 0; index < a5.length; index++) {
//     const element = a5[index];
//     newArr.push(element**2);
// }
// console.log(newArr);

let newArr = a5.map((element, _index, _array)=>{
    return element**2;
})
console.log(newArr);

// filter used to filter elements from array 

// const greaterThanFifty = (element)=>{
//     if(element>50){ 
//         return true;
//     }
//     return false;
// }
// console.log(newArr.filter(greaterThanFifty));

// we can also write function inside that bracket also 

console.log(newArr.filter(greaterThanFifty = (element)=>{
    if(element>50){ 
        return true;
    }
    return false;
}));

// reduce method to reduce array to a single value 

let a6 = [1,2,3,4,5,6,7,8,9];

const reduce = (a, b)=>{
    return a*b;
}
console.log(a6.reduce(reduce));

console.log(Array.from("Harry")); // using array from we can convert string and object to array
 