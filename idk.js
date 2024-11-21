const memoizedTable = {1: 0+1, 2: 1+1}; // f(3) {3: 3 * 2, 2: 2 * 1}
export default function FiM(n) {
if (n === 1) return 1;
return memoizedTable[n] 
    || (memoizedTable[n] = FiM(n-2) + FiM(n - 1));
}
