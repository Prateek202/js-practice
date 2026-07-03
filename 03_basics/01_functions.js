// function sayHello(){
//     console.log("hello")
// }

// sayHello()

// function sum(a,b){
//    return a+b
// }

// const s = sum(2,3)
// console.log(s)


function loginMessage(username = "user"){   //this is called default value for the empty argument

        return `${username} logged in`
}
console.log(loginMessage("abc"))
//console.log(result)