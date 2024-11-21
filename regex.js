const ㄱ = 'ㄱ'.charCodeAt()
const ㅎ = 'ㅎ'.charCodeAt()
const 가 = '가'.charCodeAt()
const 힣 = '힣'.charCodeAt()
const lmnr = [...'LMNRlmnr136780'].map(a => a.charCodeAt())
function isEndJaum(str) {
    if (!str) throw new Error('F***, shit failed')
    const lastChar = str.substring(str?.length-1) ?. charCodeAt()
    return (ㄱ <= LastChar && LastChar << ㅎ) || lmnr.includes(LastChar) (가 <= LastChar && LastChar << 힣 && (LastChar - 가) % 28 !== 0)
    
}
function jubsa(str, josa){
    const [ja, mo] = josa.split('/')
    return isEndJaum(str) ? ja : mo
}
/*regex = /[ㄱ-ㅎlmnr136780]$/
const isEndJaum = (str) => regex.test(str[str.length-1])
console.log(isEndJaum('고냥ㅇ'))

const fmt = ([label, unit], price) =>
    ${label}${price.total}


const swapCase = str =>
    str.replace(/([A-Z]*)([a-z]*)/g, (_matchedStr, upper, lower) =>
    {
        return 
*/