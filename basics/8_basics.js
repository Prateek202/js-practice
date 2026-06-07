//comparision

// console.log("2" > 1)
console.log(null > 0)   // false
console.log(null >= 0)  //true bcz equality == check and comparision < > >= <= work differently
//comparision converts null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false
console.log(null == 0)

console.log(undefined == 0)  //all false
console.log(undefined > 0)  // false
console.log(undefined < 0)  //false
console.log(undefined <= 0) //false
console.log(undefined >= 0) //false


//strict checking === it not only compare values it check data type also
console.log("2" === 2)