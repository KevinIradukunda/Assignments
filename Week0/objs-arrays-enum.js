"use strict";
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     roles: [number,string]
// } = {
//     name: "kevin",
//     age: 23,
//     hobbies: ["sport","cooking"],
//     roles: [1,"admistrations"]
// };
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
    Roles[Roles["READ_ONLY"] = 2] = "READ_ONLY";
})(Roles || (Roles = {}));
;
const person = {
    name: "kevin",
    age: 23,
    hobbies: ["sport", "cooking"],
    roles: Roles.ADMIN
};
if (person.roles === Roles.ADMIN) {
    console.log("you are on the Admin page");
}
// let favouriteArray: any[];
// favouriteArray = ["cooking","sport", 1];
for (const hobbies of person.hobbies) {
    console.log(hobbies);
}
