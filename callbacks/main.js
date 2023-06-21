

const printEven = function(num) {
    console.log(`${num} is even`);
}

const printOdd = function(num) {
    console.log(`${num} is odd`);
}

const printNumber = function(num, printFunction) {
    printFunction(num);
}

const number = 6;
if (number % 2 === 0) {
    printNumber(number, printEven);
} else {
    printNumber(number, printOdd);
}

console.log('after print number');


setTimeout(function() {
    console.log('hello from inside of setTimeout')
}, 0);

console.log('after setTimeout');

const nums = [1, 2, 3];
nums.forEach(function(item) {
    console.log(item);
})

console.log('after forEach');


function setTimeoutSync(callback ,ms) {
    let start = new Date().getTime();
    while (start + ms >= new Date().getTime()) {}
    callback();
}

setTimeoutSync(function() {
    console.log('hello from inside of setTimeoutSync')
}, 3000);

console.log('after setTimeoutSync');








