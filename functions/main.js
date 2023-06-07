
function printHello() {
    console.log("hello");
    // if there is not return keyword the function returns undefined
}

printHello();
console.log(printHello());      // 1: "hello"  2: undefined

console.log(printHello);        // here I am sending a function

const foo = printHello;
foo();


// *** Sending a function to another function

// OPTION 1 - predeclare the function I want to send
console.log(printHello); 

// OPTION 2 - declaring an anonymous function while sending
console.log(function() {
    console.log("hello");
})


// OPTION 1
setTimeout(printHello, 3000);

// OPTION 1
setTimeout(function() {
    console.log('hello');
}, 3000);

console.log('after timeout');


const numbers = [2, 56, -10];
// for (const num of numbers) {

// }
numbers.forEach(function(number, index) {
    console.log(number);
    console.log(index);
})


function printName(fname, lname) {
    const greeting = `Hello ${fname} ${lname}`;
    console.log(greeting);
    console.log(arguments);
}


printName("John", "Doe");
printName("Mike");              // Hello Mike undefined
printName();                    // Hello undefined undefined
printName("John", "Doe", 30);   


// function createDate(ms);
// function createDate(day, month, year);
// function createDate(string);    // "2023-06-06"

function createDate() {
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        // ms
    } else {
        
    }
}



function add(num1, num2) {
    if (arguments.length === 2) {
        return num1 + num2
    } else {
        return function(x) {
            return num1 + x;
        }
    }
}



// add(2,5)        //7
// add(5)(2)       //7


console.log(add(5,2));          // 7      
console.log(add(5)(2));         // 7      



function updateNum(num) {
    num = 10;
}

let x = 50;
updateNum(x);
console.log(x);                 // 50

const person = {
    name: "John Doe",
    age: 20
}

// function updatePerson(myPerson) {
//     myPerson.age = 30;
// }
// updatePerson(person);
// console.log(person.age);                 // 30


function updatePerson2(myPerson) {
    myPerson = {
        name: "John Doe",
        age: 50
    }
}
updatePerson2(person);
console.log(person.age);                 // 20















