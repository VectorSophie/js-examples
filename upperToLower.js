//1
const date1 = new Date('1970-01-01');
const date2 = new Date('1970-01-02');
const differenceInSeconds = (date2 - date1) / 1000;
console.log(differenceInSeconds); 
//2
const randomDates = [];
const today = new Date();
const month = today.getMonth();
for (let i = 0; i < 5; i++) {
  const randomDay = Math.floor(Math.random() * 31) + 1;
  const randomDate = new Date(today.getFullYear(), month, randomDay);
  randomDates.push(randomDate);
}
randomDates.sort((a, b) => b - a);
//3
const today1 = new Date(); 
const nextYear = today.getFullYear() + 1; 
const nextYearDate = new Date(nextYear, today1.getMonth(), today1.getDate()); 
const daysOfWeek = ['일요일', '월요일', '화요일','수요일', '목요일', '금요일', '토요일'];
console.log(daysOfWeek[nextYearDate.getDay()]);
//4
const todayDate = new Date('2024-10-07');
const futureDate = new Date(todayDate.getTime() + 100 * 24 * 60 * 60 * 1000);
console.log(futureDate.toDateString());
//5
function printCalendar(year, month) {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const firstDayOfWeek = firstDay.getDay(); 
    const lastDate = lastDay.getDate(); 
    console.log(daysOfWeek.join('  '));
    console.log('——————————————');

    let calendar = '';
    for (let i = 0; i < firstDayOfWeek; i++) {
        calendar += '    '; 
    }
    for (let date = 1; date <= lastDate; date++) {
        calendar += (date < 10 ? ' ' + date : date) + '  ';

        if ((date + firstDayOfWeek) % 7 === 0) {
            calendar += '\n';
        }
    }

    console.log(calendar);
}
//6

//7

//8
function fmt(tmplstrs, ...args) {
    let ret = tmplstrs[0];
    for (let i = 0; i < args.length; i++) {
      let arg = args[i];
      if (typeof arg === 'number') {
        arg = arg.toLocaleString()
      }
      ret += arg;
      ret += tmplstrs[i + 1];
    }
    return ret;
  }
//9
regex = /[ㄱ-ㅎlmnr136780]$/
const isEndJaum = (str) => regex.test(str[str.length-1])
//10
//isEndJaum 또 선언 안함함
function iga (str){
    res = (isEndJaum(str) ? '가' : '이')
    return str + res
}
function eunun (str){
    res = (isEndJaum(str) ? '는' : '은')
    return str + res
}
function eulul (str){
    res = (isEndJaum(str) ? '를' : '을')
    return str + res
}
//11
function searchByKoreanInitialSound(arr, initial) {
    const regex = /^[ㄱ-ㅎ]/
    return arr.filter(item => regex.test(item))
}
//12
function upperToLower (str) {
    const result = str.replace(/[A-Za-z]/g, (matchedStr) => {
        if(/[A-Z]/.test(matchedStr)) {
            return matchedStr.toLowerCase()
        }
        if (/[a-z]/.test(matchedStr)) {
            return matchedStr.toUpperCase()
        }
    })
    return result
}
