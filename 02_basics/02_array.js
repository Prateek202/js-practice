const name =  ["A", "B", "C"]
const name2 = ["x", "y", "z"]
//name.push(name2)    //this pushes name2 array as array element into name
//const name3 = name.concat(name2)    //merege both array and return a new array


//there is more arrays and we want to merge so use spread 
const cricketers = ["virat", "Rohit", "Dhoni"]
const temp = [...name, ...name2, ...cricketers]
// console.log(temp)


// const anotherArr = [1,2,3,[4,5],6,7,[8],9]
// const anotherArr2 = anotherArr.flat(1)  //in flat(arg) arg we give depth so it is basically nesting
// const anotherArr3 = anotherArr.flat(Infinity)   //we can write like this too
// console.log(anotherArr2)
// console.log(anotherArr3)


//to convert any data into array
console.log(Array.from("Rohit"))
console.log(Array.from(["Rohit"]))
console.log(Array.from({name:"abc"}))

let x = 1
let y = 2
let z = 3
console.log(Array.of(x,y,z))   //Returns a new array from a set of elements.
console.log(Array.isArray(22))   
