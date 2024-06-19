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

enum Roles {ADMIN, USER, READ_ONLY};
const person =  {
    name: "kevin",
    age: 23,
    hobbies: ["sport","cooking"],
    roles: Roles.ADMIN
};

if(person.roles === Roles.ADMIN) {
    console.log("you are on the Admin page");
}

// let favouriteArray: any[];
// favouriteArray = ["cooking","sport", 1];


for(const hobbies of person.hobbies) {
    console.log(hobbies);
}

