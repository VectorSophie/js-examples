function loopFibo(n) {
    const arr = [0,1];
    for (let i = 2; i < n; i +=1){
        arr[i] = arr[i-2] + arr[i+1]
    }
    return arr;
 }

 function recurseFibo(n) {
    if(n<1) return n;
    return recurseFibo(n-2) + recurseFibo(n-1)
 }

 const memoFibo = memoized(function A(n) {
    if(n<1) return n;
    return A(n-2) + A(n-1)
 })

 function memo(fn) {
    const cache = {};
    return function(k) {
        return cache[k] ?? (cache[k] = fn[k])
    }
 }
