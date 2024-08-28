console.log("this is a tutorial on strings");

let a = "Aryan Mittal";
console.log(a);
console.log(a[0]);
console.log(a[4]);
console.log(a[15]); // js made for least error forgiving language

console.log(a.length);

// template literals 

let Name = "Aryan";
let roommate = "Aaryan";
// console.log("His name is " + Name + " and his roommate is " + roommate);
console.log(`His name is ${Name} and his roommate is ${roommate}`);

// Escape sequence characters form notes


// String properties and methods

let b = "Aryan mittal";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(0, 5/*open ended*/)); // from 0 to 4
let c = "Harry bhai";
console.log(c.replace("bhai", "bhau"));

let d = "Harry bhai bhai";
console.log(d.replace("bhai", "bhau")); // only first occurence will we replaced

console.log(c.concat(" pehechana me ", b, " bhau I love ashwarya"));

// string is immutable 
// explore more string functions