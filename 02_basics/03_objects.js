//singlton
//object.create

//object litereals


const symb = Symbol("key1")

const JsUser = {    //declaring obejct
    name: "Tom",
    "surname": "yan",
    [symb]: "myKey1",   //use sybmbol as key of object
    age: 23,
    locaction: "newyork",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.name);   //access object
// console.log(JsUser["surname"]);   //access object; bcz we can not access surname by .
// console.log(JsUser[symb]);   
// console.log(typeof JsUser[symb]);   
// JsUser.age = 25
console.log(JsUser.age); 
// Object.freeze(JsUser)   //now the values are freeze we can not change

JsUser.age = 24
//console.log(JsUser); 

JsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`)
    console.log(`hello js user, ${JsUser.name}`)
}
console.log(JsUser.greeting())