/*
const user = new Object();

const literalUser = {
    name: "Colt",
    age: 32,
    "Profession is": "Udemy",
};

user.name = "Harry";

console.log(user.name);

delete literalUser["Profession is"];

console.log(literalUser["Profession is"]);

console.log((user.test = "Name"));

console.log(user.test);

user.test = "change";

console.log(user.test);

const name = "Harry";

const house = "Griffindor";

const potter = {
    [name]: "Stupid",
    [house]: "Mix Bloods",
};

console.log(potter);

const harry = {
    name,
    house,
    3: "Hermione",
    girl: "Ginny",
    wand: "Pheonix",
};

console.log(harry);

delete harry.wand;

harry.wand = "Elder";

console.log("wand" in harry);
console.log("parents" in harry);
console.log(name in harry);
console.log(name in potter);

for (const key in harry) {
    console.log(key);
}

if ("girl" in harry) {
    console.log("god damn harry!");
}

const testUser = {};
testUser.name = "John";
testUser.surname = "Smith";
testUser.name = "Pete";

delete testUser.name;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;

for (key in salaries) {
    sum += salaries[key];
}

console.log(sum);

*/

/* 
For in loop, copying objects

const user = { name: "Harry" };
console.log(user);
const wizard = user;

wizard.wand = "Potter";

console.log(user);

console.log(wizard === user);

const darkWizard = {};

for (prop in wizard) {
    darkWizard[prop] = wizard[prop];
    console.log(prop);
}

console.log(darkWizard);

const cloneWizard = { ...darkWizard };
console.log(cloneWizard);

const govtClone = Object.assign({}, darkWizard);

console.log(govtClone);

*/

/* 
This keyword introduction and methods in objects

const person = {
    name: "Mark",
    age: 25,
    sayHi() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

const admin = {
    name: "Derek",
    age: 25,
    sayHi() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

for (const key in person) {
    console.log(typeof person[key]);
}

console.log(person);

const greet = function () {
    console.log(this);
    console.log(`Hi there, my name is ${this.name}`);
};

let name = "Hello";
const greetArrow = () => {
    console.log(`Hi there, my name is ${this.name}`);
};

person.sayHi();

person.f = greet;
admin.f = greet;

person.f();
admin.f();

person.r = greetArrow;
person.r();

*/
