 function add (num1:number, num2: number) {
    return num1 + num2;
 }

 function printResult(num: number):undefined {
    console.log('result:' +num);
 }

printResult(add(5, 20));

let combineValues: Function; 
combineValues = add;
// combineValues = 5;
console.log(combineValues(8, 8));