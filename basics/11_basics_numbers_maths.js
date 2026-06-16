const score = 12
console.log(score)
//another way to define number tyoe
const bal = new Number(5);
console.log(bal)


console.log(bal.toString().length);
console.log(bal.toFixed(2));

const num = 123.3
console.log(num.toPrecision(3));
console.log(num.toPrecision(2));
console.log(num.toPrecision(4));


//++++++++++++++++ Maths +++++++++++++++++++

console.log(Math)   //use in browser to see all methods
console.log(Math.abs(-4))   
console.log(Math.round(4.8))   
console.log(Math.round(4.2))
console.log(Math.floor(4.2))
console.log(Math.ceil(4.2))
console.log(Math.max(4,3,6,7))
console.log(Math.min(4,3,6,7))
 //in random always between 0-1

console.log(Math.random()) 
//dice game

console.log(Math.random()*10) 
const min = 10
const max = 20
console.log(Math.floor(Math.random() *(max - min + 1))+min)