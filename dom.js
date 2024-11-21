const head = document.head
const body = document.body
const div = document.getElementsByTagName('div')
console.log(head, body, [...div])
body.append('no')
const ele = document.createElement('strong')
ele.innerHTML = <p><i>Italian soccer team sucks ass</i></p>
ele.backgroundColor = 'purple'
ele.paddingTop = 
body.appendChild(body.firstChild)

const xxx = document.getElementsById('xx')
xxx.style.backgroundColor = 'blue'
xxx.style.fontWeight = '900'
xxx.style.backgroundColor = 'yellow'
xxx.dataset.x = 'x'
xxx.dataset.y = 'y'
const yyy = document.getElementsByClassName('y')
yyy.setAttribute('style', 'color:red')
document.write('*')

function nm() {
    console.log('name', ...arguments, this, globalThis)
}
function chg(inp) {
    console.log('chg', ...arguments, inp.value)
}