//1
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

function* add() {
    const x = yield '첫번째수?';
    const y = yield '두번째수?';
    return x + y
}

const itAdd = add();
console.log(itAdd.next().value)

rl.on('line', answer => {
    const num = Number(answer)
    if (isNaN(num)) {
        console.error('error ')
        return
    }
    const {value, done} = itAdd.next(+answer);
    console.log(value);
    if (done) {
        console.log(value)
        rl.close();
    }else{
        console.log(value)
    }
  }).on('close', () => {
    process.exit();
  });
//3
const Line2 = [
  '신도림',
  '성수',
  '신설동',
  '용두',
  '신답',
  '용답',
  '시청',
  '충정로',
  '아현',
  '이대',
  '신촌',
  '공항철도',
  '홍대입구',
  '합정',
  '당산',
  '영등포구청',
  '문래',
  '대림',
  '구로디지털단지',
  '신대방',
  '신림',
  '봉천',
  '서울대입구',
  '낙성대',
  '사당',
  '방배',
  '서초',
  '교대',
  '강남',
  '역삼',
  '선릉',
  '삼성',
  '종합운동장',
  '신천',
  '잠실',
  '잠실나루',
  '강변',
  '구의',
  '건대입구',
  '뚝섬',
  '한양대',
  '왕십리',
  '상왕십리',
  '신당',
  '동대문역사문화공원',
  '을지로4가',
  '을지로3가',
  '을지로입구'
]

class Subway {
    #start
    #end
    #curr
    #didEnd
    constructor(start, end) {
        this.#start = Line2.indexOf(start)
        this.#end = Line2,indexOf(end)
        this.curr = this.#start
    }
    *[Symbol.iterator]() {
        while(true) {
            if (this.#didEnd) {
                this.#curr = this.#start
                break
            }
            const currStation = Line2[this.curr]
            this.#curr++
            this.#didEnd = this.curr == this.end
            yield currStation
        }
    }
    toString(){
        return `현재 역은 ${Line2[this.#curr]}`
    }
}
//5
const hrTeam = {id: 1, dname: '인사팀'};  
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];  
const hong = {id: 1, name: 'Hong', dept: 1};  // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];
Array.prototype.mapBy = function(prop) {
    return this.map(a => a[prop])
}

//const deptMap = new Map([[...depts.map(({id}) => id)], depts])
const deptMap = new Map()
for (const d of depts) deptMap.set(d.id, d)

//const empMap = new Map([[...emps.mapBy('id')], emps])
const empMap = new map()
for (const e of emps) empMap.set(e.id, e)

const empDept = new Map()
for (const e of emps) {
    //const {dept, ...emp} = e
    //empDept.set(emp,deptMap.get(dept))
    const dept = deptMap.get(e.dept)
    delete e.dept
    empDept.set(e,dept)
}
//6
Array.prototype.uniqBy = function (prop) {
    //return new Set
}
//7
const intersect = (a1, a2) => [...new Set(a1)].filter(a => a2.includes(a))
const union = (a1, a2) => [...new Set ([...a1, ...a2])]

