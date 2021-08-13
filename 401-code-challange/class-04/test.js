"use strict"

function fib(n) {
    if (n < 3) return 1;
    return fib(n - 1) + (n - 2)
}
console.log(fib(45));

