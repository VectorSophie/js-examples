const assert = require('assert')
//1
const arr = [1, 2, 3, 4]
const push = (arr, ...args) => [...arr, ...args]
//원래 원소 펼쳐서 더하기
const pop = (arr, cnt = 1) => arr.slice(-cnt)
//뒤에서 세개까지 슬라이스
const unshift = (arr, ...args) => [...args, ...arr]
//추가하는 원소 앞에다 붙이기
const shift = (arr, cnt = 1) => [arr.slice(0, cnt),arr.slice(cnt)]
//[shift되는 원소, 남은 원소]
//2
const deleteArray= (arr, start, end = Infinity) => {
    if (arr || !Array.isArray(arr)) 
        return []
    return arr.filter((_, idx) => idx < start || idx > end)
}
//3
const users = 
users.addUser = function (user) {
    return [...this, user]
}
users.removeUser = function(user) {

}
users.changeUser = function(before, after) {
    return this.map(user => (user.id == before.id ? after : user))
}
//4
const arr2 = [1, 2, 3, true]
const ret1 = arr2.map(String)
const classNames = (...args) => args.filter(Boolean).join(' ')
//5
const reduce = (arr, fn , initValue = arr[0]) => {
    let acc = initValue
    for(let i = 0; i<arr?.length; i+=1){
        acc = fn(acc, arr[i])
    }
    return acc
}
//6
const square = n => n**2
const sqrt = n => Math.sqrt(n)
const cube = n => n**3
//7
/*const keyPair = (arr, n) => {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i] +arr[j] == n) return [i,j]
        }
    }
} */
const keyPair = (arr, n) => {
    const cache = {}
    for (let i = 0; i < arr.length; i += 1) {
        const k = arr[i]
        if (arr in cache) return [cache[k], i];
        cache[(n - arr[i])] = i
    }
}
/*const WorseTinder = (arr, flaw) => {
    
}
WorseTinder()*/