

const Kevin = {
    fullnames: "Kevin Iradukunda",
    Mass: 29,
    height: 1.90,
    calcBodyMass : function() {
        const calcheight = this.height * 2;
        this.calcBmi = this.Mass / calcheight;
        return this.calcBmi;
    }
};

const Joe = {
    fullnames: "Joe Iradukunda",
    Mass: 12,
    height: 1.70,
    calcBodyMass : function() {
        const calcheight = this.height * 2;
        this.calcBmi = this.Mass / calcheight;
        return this.calcBmi;
    }
};

console.log(Kevin.calcBodyMass());
console.log(Joe.calcBodyMass());
let conditions = Joe.calcBodyMass() < Kevin.calcBodyMass() ? console.log(`${Kevin.fullnames} BMI ${Kevin.calcBodyMass()} is higher than ${Joe.fullnames} ${Joe.calcBodyMass()}`) : console.log(`${Kevin.fullnames} BMI ${Joe.calcBodyMass()} is higher than ${Joe.fullnames} ${Kevin.calcBodyMass()}`);
