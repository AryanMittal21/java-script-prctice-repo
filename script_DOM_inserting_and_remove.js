// this is very important thing

console.log(document.querySelector(".box"));
//inner html and palying with inner html
console.log(document.querySelector(".box").innerHTML = "Hey I am Aryan Mittal");
console.log(document.querySelector(".container").innerHTML);
//inner text
console.log(document.querySelector(".box").innerText);
console.log(document.querySelector(".container").innerText);
//outerHTML
console.log(document.querySelector(".container").outerHTML);
// tag name
console.log(document.querySelector(".container").tagName);
//node name
console.log(document.querySelector(".container").nodeName);
//text content
console.log(document.querySelector(".container").textContent);
//hidden 
console.log(document.querySelector(".container").hidden); // can be converted to true
console.log(document.querySelector(".container").hidden = true); // this will hide our element
console.log(document.querySelector(".container").hidden = false);
// to check whether a attribute is present in a element or not
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").hasAttribute("class"));
// get attribute to check which attribute is present
console.log(document.querySelector(".box").getAttribute("class"));
// to find all atributes 
console.log(document.querySelector(".box").attributes);
// set attribute to define an attribute
console.log(document.querySelector(".box").setAttribute("style","displ000ay:flex"));;
console.log(document.querySelector(".box").hasAttribute("style"));
// to remove a attribute 
console.log(document.querySelector(".box").removeAttribute("style"));
console.log(document.querySelector(".box").hasAttribute("style"));

// by this command youcan manupulate any site
// document.designmode = "on ";

// for html you can create your own attributes using data- as data- will be ignored 
console.log(document.querySelector(".box").dataset); // to find data-

// Insertion methods 

//insert nodes
let div= document.createElement("div");
div.innerHTML = " I have been inserted <b>By Aryan Mittal</b>";
div.setAttribute("class","new");
document.querySelector(".container").append(div); // alaways at end of contained

// more methods from notes 
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".box").replaceWith(div);

// insert adjacent html simmilar things can be done with text and elements
let cont= document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<B> I am under the water. Here its too much raining. hoooo!</b>");
// cont.insertAdjacentHTML("beforeend", "<B> I am under the water. Here its too much raining. hoooo!</b>");
// cont.insertAdjacentHTML("afterbegin", "<B> I am under the water. Here its too much raining. hoooo!</b>");
// cont.insertAdjacentHTML("beforebegin", "<B> I am under the water. Here its too much raining. hoooo!</b>");

// node removal
document.querySelector(".box").remove();

// to find class set also adding and removing class in js
console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);
console.log(document.querySelector(".container").classList.add("aryan")); // one class will be added only one time
console.log(document.querySelector(".container").className);
console.log(document.querySelector(".container").classList.remove("aryan"));
console.log(document.querySelector(".container").className);

// .classList.toggle- used to on off anything
console.log(document.querySelector(".container").classList.toggle("red")); // red is already present therefore it will remove red from it
console.log(document.querySelector(".container").className);
console.log(document.querySelector(".container").classList.toggle("red")); // red is abesent therefore it will add red to it
console.log(document.querySelector(".container").className);





























