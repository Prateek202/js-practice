/*
In JavaScript, a Higher-Order Function (HOF) is simply a function that does at least one of these:

1.  Takes another function as an argument
2.  Returns another function


1. Function passed as an argument
function greet(name) {
    return `Hello ${name}`;
}


function processUser(callback) {
    console.log(callback("Prateek"));
}


processUser(greet);

Here processUser() is a higher-order function because it receives greet as an argument.

2. Function returns another function
function multiplier(x) {
    return function (y) {
        return x * y;
    };
}


const double = multiplier(2);


console.log(double(5)); // 10

multiplier() is a higher-order function because it returns a function.


**Common HOFs you'll use constantly**
===============================================================================
*****map()****

Transforms every element and returns a new array.

const numbers = [1, 2, 3, 4];


const result = numbers.map(num => num * 2);


console.log(result);
// [2, 4, 6, 8]

Think:

"Take every item and transform it."
==========================================================================================

****filter()****

Selects elements based on a condition.

const numbers = [1, 2, 3, 4, 5];


const result = numbers.filter(num => num > 2);


console.log(result);
// [3, 4, 5]

Your previous Engineering example:

const engineeringEmployees = employeeData.filter(
    emp => emp.department === "Engineering"
);

Think:

"Keep the items that satisfy this condition."

========================================================================================

****forEach()****

Runs a function for every element.

const numbers = [1, 2, 3];


numbers.forEach(num => {
    console.log(num);
});

Think:

"Do something for every item."

Important: forEach() doesn't create/return a new array.

================================================================


****reduce()****

Reduces an array to a single value.

const numbers = [10, 20, 30];


const total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);


console.log(total);
// 60

Think:

"Combine everything into one result."

For example, total employee salary:

const totalSalary = employeeData.reduce((total, emp) => {
    return total + emp.salary;
}, 0);


===========================================================================

****find()*****

Returns the first matching element.

const employee = employeeData.find(
    emp => emp.department === "Engineering"
);


console.log(employee);

This returns John because he's the first Engineering employee.

Think:

"Give me the first one that matches."

=================================================================================
****some()****

Checks whether at least one element satisfies a condition.

const hasEngineering = employeeData.some(
    emp => emp.department === "Engineering"
);


console.log(hasEngineering);
// true

Think:

"Does at least one exist?"

=============================================================================


****every()****

Checks whether all elements satisfy a condition.

const allAdults = employeeData.every(
    emp => emp.age >= 18
);


console.log(allAdults);
// true

Think:

"Do all of them satisfy this?"



The important mental model
HOF	                     What it does	                             Returns
map()	                Transform every item	                     New array
filter()	            Select matching items	                     New array
forEach()	            Execute something for each item	             undefined
reduce()	            Combine items	                             Single value
find()	                Find first matching item	                 Element / undefined
some()	                Check if any match	                         true/false
every()	                Check if all match	                         true/false


======================================================================================


*/