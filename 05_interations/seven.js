const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//task is to add 10 to each element 

// const newNumber = numbers.map((num)=>{
//     return num + 10
// })
// console.log(newNumber)

// *****Chaining**************

const chainNum = numbers.map((num)=>{
    return num * 10
}).map((num)=>{
    return num + 1

}).filter((num)=>{
    return num > 40
})

console.log(chainNum)
