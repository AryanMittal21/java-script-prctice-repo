/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let shop = prompt("Enter your sector of business it can be \nEngine \nFoods \nGarments \n other are not valid");

let a = Math.random();
let b = Math.random();
console.log(a, b);
let adj;
let end_word;

if(a<=0.33){
    adj = "Crazy";
}
else if( a <=0.67 && a>0.33 ){
    adj = "Amazing";
}
else{
    adj = "Fire";
}

if( b <=0.33 ){
    end_word = "Bros";
}
else if( b <=0.67 && b>0.33 ){
    end_word = "Limited";
}
else{
    end_word = "Hub";
}

console.log(`Your Business name can be "${adj} ${shop} ${end_word}"`);
