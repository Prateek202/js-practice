const accountId = 1443
let accountEmail = "prateek@example.com"
var accountPassword = "123445"
accountCity = "delhi"


//accountId = 1  // TypeError: Assignment to constant variable

accountEmail = "test"

accountPassword = "1111"
accountCity = "mumbai"
console.log(accountId);


/*
prefer not to use var 
bcz of issue in block scope and functional scope

*/

let name;   //undefined

console.table([accountId,accountEmail,accountPassword,accountCity,name])