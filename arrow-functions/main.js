function printName(fname, lname) {
    console.log(`${fname} ${lname}`);
}
printName('John', 'Doe');

const printName2 = (fname, lname) => {
    console.log(`${fname} ${lname}`);
}
printName2('John', 'Doe');


const nums = [1, 2, 3, 4, 5, 6];
nums.forEach(function(item) {
    console.log(item);
})
nums.forEach(item => console.log(item));


const evenNums = nums.filter(function(item) {
    return item % 2 === 0;
})
console.log(evenNums);

const evenNums2 = nums.filter(item => item % 2 === 0);