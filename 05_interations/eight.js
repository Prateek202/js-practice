// const myNums = [1, 2, 3]

// let initialValue = 0
// const total = myNums.reduce((accumulator, currentValue)=>{
//     console.log(`Accumulator : ${accumulator} and currentValue : ${currentValue}`)
//     return accumulator = accumulator + currentValue
// }, initialValue)

// console.log(total)


// const arr = []
// arr.push(2)
// console.log(arr)


const shoppingCart = [
    {
        item : 'abc',
        price : 11

    },
    {
        item : 'speaker',
        price: 1999

    },
    {
        item: 'tshirt',
        price: 999

    }
]

//console.log(shoppingCart.price)
const totalPayment = shoppingCart.reduce((acc, curVal)=>{
    return acc = acc + curVal.price
}, 0)
console.log(totalPayment)