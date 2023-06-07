
var x = 10;                     // Global scope
console.log(x);
console.log(window.x);


let y = 20;                     // Script scope

function foo() {
    console.log('foo');

    let z = 50;                 // Local scope
    console.log(z);             // 50

    let x = 20;
    console.log(x);             // 20
    console.log(window.x)       // 10

    if (true) {
        var varBlock = 60;      // Local scope
        let letBlock = 60;      // Block scope
    }

    console.log(varBlock);      // 60
    //console.log(letBlock);      // error

    function innerFoo() {
        let a = 1;              // Local scope
        console.log(a);         // 1
        console.log(z);         // 50       // z is a closure variable for innerFoo
    }
    innerFoo();
}
foo();
console.log(z);                 // 

// function arguments has a local scope
function bla(a, b) {
    console.log(a, b);
} 

bla(1, 2);

// IIFE - Immediatly Invoked Function Expression
(function() {

})();