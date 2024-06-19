"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('result:' + num);
}
printResult(add(5, 20));
let combineValues;
combineValues = add;
// combineValues = 5;
console.log(combineValues(8, 8));
