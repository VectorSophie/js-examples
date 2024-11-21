const assert = require('assert');

function ex1() {
    const dog = {
        name: 'Maxx',
        showMyName() {
        console.log(`My name is ${this.name}.`);
        },
        whatsYourName() {
            //setTimeout(() => this.showMyName(), 1000);
            //setTimeout(this.showMyName.bind(this), 1000);
        },
    };
    
    dog.whatsYourName();
} 
ex1();

function once(cb, rebirth) {
    let call = false;
    return function(...args){
        if (call) {
            setTimeout(() => {
                call = false;
            },rebirth)
            return
        }
        call = true;
        return cb(...args);
    }

}

const OMT = cb => {
    let call = false;
    return function(...args){
        if (call) return
        call = true;
        return cb(...args);
    }
}
const rebirthSec = 2000;
const fn = OMT((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
assert.strictEqual(fn(1,6))

function getDiffMillis(dt1, dt2) {
    const d1 = new Date()
    const d2 = new Date()
    const { getTime: getTime1 } = new Date(dt1);
    const { getTime: getTime2 } = new Date(dt2);
    return getTime1(call).d1 - getTime2(call).d2;
  }
  getDiffMillis('2021-01-01', '2021-01-02');
  
