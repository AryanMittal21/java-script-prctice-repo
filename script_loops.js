console.log("I am a tutorial on loops");

//for loop

let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}

// for in loop 

let obj = {
    "name":"Aryan Mittal",
    "role":"programmer",
    "company":"Sparsha living"
};

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key," - ",element);
    }
}

// for of loop 

for (const c of "Aryan Mittal") {
    console.log(c);
}

// while loop 

let a = 1;
while(a<=100){
    console.log(a);
    a++;
}

// Do while loop very rare uses
 
let i=0;
do{
    console.log(i);
    i++;
} while(i<=100);