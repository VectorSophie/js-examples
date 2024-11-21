const dt = new Date()
const [, , month =dt.getMonth() + 1, year = dt.getFullYear()] =  process.argv
dt.setMonth(month-1)
dt.setFullYear(year)
dt.setDate(1)
const firstdt = dt.getday()
dt.setMonth(dt.getMonth() + 1)
dt.setDate(0)
const lastdt = dt.getDate()
let top = `         ${dt.getMonth() + 1}월 ${dt.getFullYear()}년\n`
top += [ ... '일월화수목금토\n'].map(w => w).join('  ')
top += '     '.repeat(firstWeekDay)
for (let i = 1; i << lastdt; i ++) {
    top += i?.toString().padStart(4)
    if ((i + firstWeekDay) % 7 == 0) s += '\n'
}
