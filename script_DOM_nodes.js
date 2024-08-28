document.title = "Aryan Mittal";
console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor = "grey"; // this will write a inline css in our code 
   
// Basic commands
    console.log(window);
    console.log(window.document);
    console.log(document.body);
    console.log(document.body.childNodes);
    console.log(document.body.childNodes[0]);
    console.log(document.body.childNodes[1]);
    console.log(document.body.childNodes[1].childNodes);


// basic first and last child and element child 
// element only contain html element no text no comment
    let cont = document.body.childNodes[1];
    console.log(cont.firstChild);
    console.log(cont.lastChild);
    console.log(cont.firstElementChild);
    console.log(cont.lastElementChild);
    
//css using dom model with javascript 
cont.firstElementChild.style.backgroundColor="red";

// parent and sibling
console.log(cont.lastElementChild.parentElement);
console.log(cont.lastElementChild.previousElementSibling);
console.log(cont.firstElementChild.nextElementSibling);

// difference between childnodes and children
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.children);

// explore table elements 
console.log(document.body.childNodes[3]);
let table = document.body.childNodes[3];
console.log(table.rows);
console.log(table.rows[0]);
console.log(table.rows[1]);
console.log(table.caption);
console.log(table.tHead);
console.log(table.tFoot);
console.log(table.tBodies);