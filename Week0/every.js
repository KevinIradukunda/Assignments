// const array1 = [1, 36, 29, 35, 19, 50];
// const result = array1.map(number => {
//   return [number].every(num => num < 40);
// });

// console.log(result); 

const array1 = [1, 36, 29, 35, 19, 50];
const result = [];

array1.forEach(number => {
  result.push([number].every(num => num < 40));
});

console.log(result); 

