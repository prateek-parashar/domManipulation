/* 
String methods and exercises 

console.log("Hello");

const chadBacktick = `God damn it mate
You really did a number \n on that 
bomb`;

console.log(chadBacktick);

const virginQuotes = 'Hello \n my dear friend\'s, how was your \n "night"';

console.log(virginQuotes);

let str = "As sly as a fox, as strong as an ox";

console.log(str.includes("fox"));

console.log(str.indexOf("as", 2400));

const occuranceArray = (str, value) => {
    const result = [];
    let index = 0;
    while (str.indexOf(value, index) >= 0) {
        let foundIndex = str.indexOf(value, index);
        result.push(foundIndex);
        console.log(result);
        index = ++foundIndex;
    }

    return result;
};

let x = 4;
x++;
let y = 8;

x = ++y;

console.log(x);

const getCharString = () => {
    let result = "";
    for (let i = 65; i < 150; i++) {
        result += String.fromCodePoint(i);
    }

    return result;
};

console.log(getCharString());

console.log(String.fromCharCode(61));

console.log("A".codePointAt());

console.log(Math.pow(2, 16));

console.log("hello".length);

console.log("tset".toUpperCase());

const checkSpam = (str) => {
    const problem = "XXX";
    const prob = "VIAGRA";

    strUpper = str.toUpperCase();

    if (strUpper.includes(prob) || strUpper.includes(problem)) {
        return true;
    }
    return false;
};

console.log("testthis".slice(0, 3));

*/

/*
Array methods and quirks
const arr = [3, 4, 5, 2];

let val = arr.shift();

arr.unshift(78);

console.log(arr);

const bigArr = new Array(300);

console.log(bigArr.length);
bigArr[980] = 88;

console.log(bigArr.length);

bigArr.length = 10;
console.log(bigArr);

bigArr.length = 1000;

console.log(bigArr);
console.log((bigArr.length = 4));

console.log(bigArr);

const arr1 = [3, 5, "hello"];

const arr3 = ["*", "98798", 333.333];

const arr5 = arr1.concat(arr3, "tset");

console.log(arr5);

let v = arr5.find((e) => e === "*");
console.log(v);

*/

/*

Array exercises in the book

const arr = [1, 5, 83, 9, 0, -1, 0.33];

arr.sort((a, b) => a - b);

console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);

console.log(arr.filter((e) => e === 83));

arr.forEach((e) => console.log(e));

let arwr = ["HTML", "JavaScript", "CSS"];

const copyArray = (arr) => {
    let copy = arr.slice(0);

    return copy.sort();
};

console.log(copyArray(arwr));

console.log(arwr);

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));

console.log(usersMapped);
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

const unique = (arr) => {
    let result = [];
    console.log(arr.length);
    for (let i = 0; i < 9; i++) {
        console.log(i);
        val = arr.pop();
        console.log(arr);
        if (!arr.includes(val)) {
            result.push(val);
        }
    }

    return result;
};

console.log(unique(strings));


console.log(strings);

*/

/* 

Map and sets

const map = new Map();

const john = {
    name: "John",
    age: 45,
};

map.set(john, "Sgt");

const terry = john;

console.log(map.get(john));

map.delete(terry);

let recipeMap = new Map([
    ["cucumber", 500],
    ["tomatoes", 350],
    ["onion", 50],
]);

for ([key, val] of recipeMap.entries()) {
    console.log(key);
    console.log(val);
}

console.log(Object.entries(john));

recipeObj = Object.fromEntries(recipeMap);

console.log(recipeObj);
console.log(recipeMap.size);

recipeMap.forEach((val, key, map) => {
    console.log(val);
    console.log(key);
});

recipeMap.clear();
console.log(recipeMap.has("tomatoes"));

*/

/*
Object.entries() and keys

const tset = "hello";

const set = new Set(tset);

console.log(set);

console.log(Array.from(set));

const map = new Map();

map.set(3, "test");

const mapArr = Array.from(map.values());

console.log(mapArr);

// ...Your code...
function aclean(arr) {
    const valueMap = new Map();
    arr.forEach((val) => {
        val = val.toLowerCase();
        let smallSet = new Set(val);
        if (!valueMap.has(smallSet)) {
            valueMap.set(smallSet, val);
        }
    });

    return Array.from(valueMap.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

const setA = new Set("pan");
const setB = new Set("nap");

console.log(setA === setB);

console.log(setB);

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

const sumSalaries = (salaryObj) => {
    return Array.from(Object.values(salaryObj)).reduce((sum, element) => sum + element);
};

console.log(sumSalaries(salaries));

*/

/*

Object and array destructuring

let user = {
    name: "John",
    years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

*/

/*
Dates 

const val = new Date();

console.log(val);

console.log(val.getTime());

console.log(new Date(val.getTime()));

let value = new Date("2021/05/27");

console.log(value);

console.log(val.getHours());
console.log(val.getUTCHours());

let date = new Date();

date.setDate(date.getDate() + 2);

console.log(date);

let test = new Date("Feb 20, 2012, 3:12");

let test2 = new Date(2012, 1, 20, 3, 12);

console.log(test);
console.log(test2);

*/

/*
JSON stringify and JSON parse

let user = {
    name: { firstName: "John", lastName: "Smith" },
    age: 20,
    isMale: true,
};

let json = JSON.stringify(user);

console.log(json);

let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    participants: ["john", "ann"],
    number: [3, 4, 5, 6],
};

console.log(JSON.stringify(meetup));

meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

// Here converting meetup and room to JSON would result in an error as there's a cyclic reference

*/

console.log("Hello my own pc");