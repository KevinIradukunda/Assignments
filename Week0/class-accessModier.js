var Departments = /** @class */ (function () {
    function Departments(n) {
        this.employees = [];
        this.name = n;
    }
    Departments.prototype.describe = function () {
        console.log("Department:" + this.name);
    };
    Departments.prototype.addEmployees = function (employee) {
        this.employees.push(employee);
    };
    Departments.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Departments;
}());
var account = new Departments("accounting");
account.addEmployees("max");
account.addEmployees("kenny");
account.addEmployees("kevin");
account.describe();
account.printEmployeeInformation();
// const accounting = new Department("accounting");
// accounting.describe();
