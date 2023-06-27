
let x = 10;                 // Script scope

// function foo() {            // Global scope
//     let y = 20;             // Local scope

//     function innerFoo() {
//         let w = 50;         // Local scope
//         console.log(y + w); // 70

//         function innerInnerFoo() {
//             console.log(y + w)  // 70;
//         }
//         innerInnerFoo();
//     }
//     innerFoo();
// }
// foo();

// console.log(y);          // Error    


function foo(x) {
    let y = x;

    return function() {
        console.log(y);
    }
}

const bla = foo(10);
const blabla = foo(20);
// bla();                      // 10
bla();                          // 10
blabla();                       // 20


function countEven(nums) {
    let counter = 0;
    nums.forEach(num => {
        if (num % 2 === 0) {
            counter++
        }
    });
    return counter;
}

function populateList(items) {
    const items = [
        {id: 2221, text: "One"},
        {id: 2222, text: "Two"},
        {id: 2223, text: "Three"},
    ];
    const ul = document.getElementById('list');
    ul.innerHTML = "";

    for (const item of items) {
        const li = document.createElement('li');
        li.innerHTML = item.text;
        ul.appendChild(li);
        li.addEventListener('click', () => alert(item.id))
    }   
}


function createCounter() {
    let counter = 0;

    return {
        increase: function () {
        counter++;
        },
        decrease: function () {
        counter--;
        },
        value: function () {
        return counter;
        },
    };
}
  
const myCounter = createCounter();
myCounter.increase();
myCounter.increase();
myCounter.increase();
console.log(myCounter.value());




















































