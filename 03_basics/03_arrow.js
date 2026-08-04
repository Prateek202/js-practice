const user = {
    username : "Prateek",
    price: 999,
    welcomemsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)   //it will print current context
    }
}
// user.welcomemsg()
// user.username = "abc"   //it will change the value and while calling the function take updated value
// user.welcomemsg()
// console.log(this)

// function one(){
//     let name = "abc"
//     console.log(this.name)  //undefined so this can be used inside object we can not use inside functions
// }
// one()

//Arrow Function
const sum = (num1, nums2) =>{
    return num1 + nums2;

}
console.log(sum(3,5))

//implicite return

const add = (num1,num2) => (num1+num2); //always wrap in paranthesis when not using return keyword in this type of funtion
console.log(add(2,2))