class Departments {
    name:string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }
    describe(this:Departments) {
        console.log("Department:" + this.name);
    }
    addEmployees(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const account = new Departments("accounting");
account.addEmployees("max");
account.addEmployees("kenny");
account.addEmployees("kevin");

account.describe();
account.printEmployeeInformation();



// const accounting = new Department("accounting");
// accounting.describe();
