//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // this return false beacuse symbol completely make different 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// jitne bhi non primitive data types hote unke tpeof dataype is object

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

 /*
 {
    andar m kuch bhi object hoga
    aur isko ek variable m bhi store kar skte hai
    let myObj{

    }
 }
 */ 

let myObj = {
    name: "hitesh",
    age: 22,
}


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3