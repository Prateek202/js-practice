//array
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["superman", "spiderman"]

const myArr2 = new Array(1,2,3,4)

//Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)    //add 9 to start of array and shift other element to one places
myArr.shift()    //remove element from start of array and shift other element to one places
// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

const newArr = myArr.join() //convert array into string
//console.log(typeof newArr)
//console.log(myArr)

//slice and splice


const sliceArr = myArr.slice(1,3)   //1,3 will return myArray element at index 1, 2; 3 will not include
console.log("A", myArr)
console.log("B ", sliceArr)

const spliceArr = myArr.splice(1,3)
console.log("C ",spliceArr)
console.log("After splice function apply on myArr ",myArr)
//INTERVIEW QUESTION *** DIFFERENCE B/W SLICE AND SPLICE

//slice just create a copy of original array and do not make changes in original array but splice changes the original array
//splice remove the portion from original array
/*
arr = [1,2,3,4,5]
newArr = arr.splice(1,3)
so this operation will store 2, 3, 4 into newArray and remove that element from arr so arr is now arr = [1,5]


*/