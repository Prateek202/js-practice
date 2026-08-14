const userEmail = ""

if(userEmail){
    console.log("got user email")

}
else    console.log("not user email")


//falsy valur
//false, 0, -0, 0n, "",null, undefined, NaN

//Truthy
//1, true, "any string", false, [], {}, function(){}

if(userEmail.length === 0)
    console.log("Email is empty")

if(false == 0)
    console.log("yey")


// Nullish coalescing operator(??)
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 1
//val1 = undefined ?? 15

//console.log(val1)

val1 = null ?? 10 ?? 20

console.log(val1)


//terniary operator
//condition ? true : false

const price = 100
price <= 50 ? console.log(`buy`) : console.log(`do not buy`)