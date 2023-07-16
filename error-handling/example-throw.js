function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw Error(`${a} or ${b} is not a number`)
    }
    let res = a * b;
    return res;
}

console.log(multiply(2, 5));
console.log(multiply(2, {s: 's'}));