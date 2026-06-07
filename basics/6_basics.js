//conversion
let scoreInString = "23"
let scoreInString2 = "23abc"
let a = null
let x = undefined

//console.log(typeof scoreInString);
console.log(typeof(scoreInString));

let scoreInNumber = Number(scoreInString);  //for conversion we can write datatype as function like for conversion in number-> Number()
console.log(typeof(scoreInNumber));


let scoreInNumber2 = Number(scoreInString2);
console.log(scoreInNumber2);    //this will return the NaN because the value is not a number

let aInNumber = Number(a)
console.log(aInNumber)

let xInNumber = Number(x)
console.log(xInNumber)

//"33" -> 33
//"33abc" -> NaN
//null -> type after conversion number; value 0



let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof(booleanIsLoggedIn))
console.log(booleanIsLoggedIn);

let check = "abc"
let booleanIscheck = Boolean(check)
console.log(typeof(booleancheck))
console.log(booleanIscheck);

//1 -> true
//2 -> false
//""-> false
//"abc" -> true


let y = 19
let yInString = String(y);
console.log(typeof(yInString));
console.log(yInString)
