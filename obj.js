
const keys = Object.keys(user)
console.log(keys)
console.log(Reflect.ownKeys(keys))
console.log('id' in user, user.hasOwnProperty('id'))
console.log(Object.getOwnPropertyDescriptors(user, 'id'))




