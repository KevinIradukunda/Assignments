// // // CHALLENGE #3
// // Let's go back to Mark and John comparing their BMIs!
// // This time, let's use objects to implement the calculations!
// // Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// // Your tasks:

// // 1. For each of them, create an object with properties for their full name,
// //  mass, and height (Mark Miller and John Smith). 
// // Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// // 2.Create a calcBMI method on each object to calculate the BMI (the same method on both objects).
// //  Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// // 3. Log to the console who has the higher BMI, 
// // together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

"use strict";

// const Kevin = {
//     fullnames: "Kevin Iradukunda",
//     Mass: 29,
//     height: 1.90,
//     calcBodyMass : function() {
//         const calcheight = this.height ** 2;
//         this.calcBmi = this.Mass / calcheight;
//         return this.calcBmi;
//     }
// };

// const Joe = {
//     fullnames: "Joe Iradukunda",
//     Mass: 12,
//     height: 1.70,
//     calcBodyMass : function() {
//         const calcheight = this.height ** 2;
//         this.calcBmi = this.Mass / calcheight;
//         return this.calcBmi;
//     }
// };



// console.log(Kevin.calcBodyMass());
// console.log(Joe.calcBodyMass());
// let conditions = Joe.calcBodyMass() < Kevin.calcBodyMass() ? console.log(`${Kevin.fullnames} BMI ${Kevin.calcBodyMass()} is higher than ${Joe.fullnames} ${Joe.calcBodyMass()}`) : console.log(`${Kevin.fullnames} BMI ${Joe.calcBodyMass()} is higher than ${Joe.fullnames} ${Kevin.calcBodyMass()}`);



function calcBodyMass() {
    const calcheight = this.height ** 2;
    this.calcBmi = this.Mass / calcheight;
    return this.calcBmi;
}

const Kevin = {
    fullnames: "Kevin Iradukunda",
    Mass: 29,
    height: 1.90,
    calcBodyMass: calcBodyMass
};

const Joe = {
    fullnames: "Joe Iradukunda",
    Mass: 12,
    height: 1.70,
    calcBodyMass: calcBodyMass
};

console.log(Kevin.calcBodyMass());
console.log(Joe.calcBodyMass());

let conditions = Joe.calcBodyMass() < Kevin.calcBodyMass()
    ? console.log(`${Kevin.fullnames} BMI ${Kevin.calcBodyMass()} is higher than ${Joe.fullnames} ${Joe.calcBodyMass()}`)
    : console.log(`${Joe.fullnames} BMI ${Joe.calcBodyMass()} is higher than ${Kevin.fullnames} ${Kevin.calcBodyMass()}`);
