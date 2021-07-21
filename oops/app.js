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
