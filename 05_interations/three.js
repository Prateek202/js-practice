// const arr = [1, 2, 3,4,5]
// for (const it of arr) {
//     console.log(it)
// }

//maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "france")

for (const [key, val] of map) {
    console.log(key, ':-', val)
}
