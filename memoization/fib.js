/*
base function before optimization
*/
const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n - 1) + fib(n - 2)
}

/*
function that I worked on my own
*/
const fib2 = (n) => {
    var seq = [1,1]
    var prev = 0;
    var nex = 0;
    if(n == 0) return 0;
    if(n <= 2) return seq[n-1];
    for(let i = 1; i < n; i++) {
        seq.push(seq[i] + seq[i-1]);
    }
    return seq[n-1];
}

/*
optimized function from tutorial
to demonstrate dynamic programming
store duplicate sub-problems to model
the tree structure => "memoization"
O(2^n) time complexity
Use JS object, keys will arg to fn,
value will be the return value
*/
const fib3 = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib3(n - 1, memo) + fib3(n - 2, memo);
    return memo[n];
}

console.log(fib3(6));
console.log(fib3(7));
console.log(fib3(8));
console.log(fib3(50));