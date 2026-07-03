// function sayHello(){
//     console.log("hello")
// }

// sayHello()

// function sum(a,b){
//    return a+b
// }

// const s = sum(2,3)
// console.log(s)


// function loginMessage(username = "user"){   //this is called default value for the empty argument

//         return `${username} logged in`
// }
// console.log(loginMessage("abc"))
// //console.log(result)

//Case: when we do not know the number of argument user will pass; example in shopping app add to cart feature

function totalPrice(...num1){   //here "..." is rest operator these three dot is also use for spread oprator 
    return num1
}
console.log(totalPrice(2,3,4,5,6))

const user = {
    userName: "abc",
    age: 11,
    city: "aaa"
}
function printUser(userDetail){     //Passing object as parameter of function
    console.log(`username is ${userDetail.userName} and age is ${userDetail.age}`)
}
printUser(user)
printUser({
    userName: "xyz",
    age: 13,
    city: "AAA"
})


const arr = [1,2,3,4]
function secondElement(getarr){ //passing array in function parameter
     return getarr[1];
}
console.log(secondElement(arr));