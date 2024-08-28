// let obj = {
//     a: 1,
//     b: "Aryan"
// }

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[prototype]] = animal

// console.log(animal);
// console.log(rabbit);
// console.log(rabbit.eats);

class Animal{
    constructor(name) {
        this.name = name // set name to bunny
        console.log('Object is created ...');
        
    }
    eats() {
        console.log('kha reha hoon...');
        
    }
    jumps() {
        console.log('kood reha hoon...');
        
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name = name
        console.log('Object is created and he is a lion... ');
    }
    eats() {
        super.eats() // if we want bath methods to be published
        console.log('kha reha hoon roar...');  // known as method overwriting 
        
    }
}

let a = new Animal("Bunny")
console.log(a);
console.log(a.eats());
console.log(a.name);

let l = new Lion("Shera Cutie")
console.log(l);
console.log(l.eats());



class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  console.log(user.name); // John
  
  user.name = "Harry"
  console.log(user.name) // Harry

  user.name = "leo" // Name is too short.
  console.log(user.name)


















