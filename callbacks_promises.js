console.log("Rohan is an hecker");
console.log("Harry is an hacker");

setTimeout(() => {
  console.log("i am inside timeout");
}, 2000); // this will preform at last due to asyncronise property of javascript.
// even if we make time 0 afterthat it will perform at last.
setTimeout(() => {
  console.log("i am inside timeout 2");
}, 0); // this before first
console.log("the end");

// callback function a function which uses a function as a variable

const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry");
  document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

// callback doom or callback hell  reffer note 

// use of promises to make our more comfertable 


// snippets
//  alert('harry');
//  console.log('harry is a nice person');
 
 
// promises

console.log('this is promises');

let prom1 = new Promise((resolve, reject)=>{
  let c = Math.random();
  if(c<0.5){
    reject("No random number was not supporting you");
  }
  else{setTimeout(()=>{
    console.log('Yes I am done');
    resolve("Harry is a good boy")
  }, 3000);}
})

// prom1.then((a)=>{
//   console.log(a);
// }).catch((err)=>{
//   console.log(err);
// }) 

let prom2 = new Promise((resolve, reject)=>{
  let c = Math.random();
  if(c<0.5){
    reject("No random number was not supporting you 2");
  }
  else{setTimeout(()=>{
    console.log('Yes I am done 2 ');
    resolve("Harry is a good boy 2")
  }, 3000);}
})

let prom3 = Promise.all([prom1,prom2])// reffer notes for more functions

prom3.then((a)=>{
  console.log(a)
}).catch(err=>{
  console.log(err)
})

// promise reffer to notes

