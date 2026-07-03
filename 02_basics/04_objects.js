const tinderUser = new Object() //singlton
tinderUser.id = "111"
tinderUser.name = "rohit"


//object inside object
const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        firstname: "Rohit",
        lastname: "Sharma"
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstname);

//Merge two or more object

const ob1 = {1: "a", 2: "b"}
const ob2 = {3: "c", 4: "d"}

// const ob3 = Object.assign({},ob1, ob2); //1st on which is {} is target and after that source
//console.log(ob3);

//and we can also use spread operator like arrays

const ob3 = {...ob1, ...ob2}
//console.log(ob3);


//when values come from databases 
//always come array of objects

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "abc@gmail.com"
    },
    {
        id: 3,
        email: "abc@gmail.com"
    }

]
// console.log(users[0].id)
//console.log(tinderUser)
// console.log(Object.keys(tinderUser))    //list only keys of object as array
// console.log(Object.values(tinderUser))    //list only values of object as array
// console.log(Object.entries(tinderUser))    

// console.log(tinderUser.hasOwnProperty("name"))  //return true or false

//********OBJECT DESTRUCTURING********** */

const course = {
    courseName: "dsa",
    courseInstructor: "abc",
    price: "2"
}

//now we can access courseName and other attributes by using course.courseName
//destructuring is another way to do this

const {courseName} = course
//or
const {courseName:name} = course
console.log(name)


//JSON: it is a object without name, and in this key should be written as string
// {
//     "id": 1,
//     "name": "abc",
//     "age": 2    


// }


