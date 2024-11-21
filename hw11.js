function makeArray(n) {
    const i = 1;
    if (i == n) return arr
    return [...arr, makeArray(i+1)] 
  }
console.log(makeArray(5))