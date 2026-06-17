//dates

let d = new Date()
//console.log(mydate)
// console.log(d.toString())
// console.log(d.toDateString())
// console.log(d.toLocaleString())
// console.log(typeof d)

//let myDate = new Date(2026, 0, 26)
let myDate = new Date(2026, 0, 26, 5, 3)
//console.log(myDate.toLocaleString())

// let newDate = new Date("20-06-1998")    //dd-mm-yyyy not allow
let newDate = new Date("06-16-2026")    
// console.log(newDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)    //in ms
//so for getting in second
console.log(Math.round(myTimeStamp/1000))


let tempDate = new Date()
console.log(tempDate.getMonth())    //months start from 0
console.log(tempDate.getDay())    



tempDate.toLocaleString('default',{
    //weekday: "long",
    dateStyle: "full"

})
console.log(tempDate)