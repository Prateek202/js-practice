/*
1. forEach() always returns undefined and is not chainable.
2. There is no way to stop or break a forEach() loop other than by throwing an exception. 
    If you need such behavior, the forEach() method is the wrong tool.
3. Early termination may be accomplished with looping statements like for, for...of, and for...in.
4. 

*/



// const coding = ["js", "c", "cpp", "python"]
// coding.forEach( (item) => {
//     //console.log(item)
//     if(item === "js")
//         console.log(item)
// })
//console.log(val)


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.filter( (num) =>{
//     return num > 4
       
// } )
// console.log(newNum)

const myBook = [
    {
        title : "one",
        genre: "history",
        year: 1999
    },
    {
        title : "two",
        genre: "geography",
        year: 2004
    },
    {
        title : "three",
        genre: "history",
        year: 2001
    }
]
const historyBook = myBook.filter((b)=>{
    return b.genre === 'history'
})

const latestBook = myBook.filter((b) => {
    return b.year >= 2000 && b.genre === 'history'
})

// console.log(historyBook)
console.log(latestBook)