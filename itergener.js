const obj = {
    id:1,
    name:'Hong',
    [Symbol.iterator] () {
        let i = 0
        return {
            next: () => ({
                value: this.name[i++]
                done: i>this.name.length,
            }),
        }
    }
}
const arr = [1, 2, 3]
console.log(' arr:', ...arr)
if (typeof obj[Symbol.iterator] == 'function')
    console.log(' obj:' )