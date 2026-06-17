//Premitive
//premitive data type is call by value

//String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 11
const scoreVal = 9.9

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('124')



// Reference Type or Non Premitive
//directly allocate value in memory

//Array, Objects, Functions

const heros = ["spiderman", "shaktiman"];

let myObj = {
    name: "abc",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof(heros));