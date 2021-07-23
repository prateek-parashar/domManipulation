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
