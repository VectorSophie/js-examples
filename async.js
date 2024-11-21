const asyncfilter = [1,2,3].filter(async a => {
    const r = await afterTime(a)
    return r % 2 == 1
})

(async function() {
    const r = await afterTime(1)
})()
