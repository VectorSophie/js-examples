//1
const arr = [100, 200, 300, 400, 500, 600, 700];

for (const index in arr) {
    console.log(index);
}
//2
for (const index in arr) {
    console.log(arr[index]);
}
//3
const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false };

for (const key in obj) {
    console.log(key);
}
//4
for (const key in obj) {
    console.log(obj[key]);
}
//5
for (const value of Object.values(obj)) {
    console.log(value);
}
//6
Object.defineProperty(obj, 'level', {
    enumerable: false
});
//7
Object.defineProperty(obj, 'role', {
    writable: false
});