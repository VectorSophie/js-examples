for (const key in arr) {
    console.log(key)
    console.log(arr[key])
}
for (const val of arr) console.log(val)

for (const key in obj) {
    console.log(key)
    console.log(obj[key])
}
for (const val of Object.values(obj)) console.log(val)
for (const [key, val] of Object.values(obj)) console.log(key, val)
Object.defineProperty(obj, 'level', { enumerable: false})
Object.defineProperty(obj, 'level', { writable: false})

function makeObjectFromArray(array) {
    const resultObject = []
    for (const[key, ...vals] of array) {
        resultObject[key] = vals
    }
    return resultObject
}
const dataObj = makeObjectFromArray(data)
console.log(dataObj)
asserts.deepStrictEqual()

function makeArrayFromObject(obj) {
    for (const [key,val] of Object.entries(obj)) {
        console.log(key,val)
        
    }
}