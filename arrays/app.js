/*
Methods to create arrays
const arr1 = ["tset", 4, { hello: "hi htere" }];



const arr2 = Array("hello", "God damn it", 57);

const arr3 = new Array(5);

arr3[1] = "tst";
arr3.push(1);
arr3.push(3);
arr3.push(3);
arr3.push(3);
arr3.push(3);
arr3.push(3);
arr3.push(3);
arr3.push(3);
arr3.push(3);

console.log(arr3);

const arr1 = Array.from(["tets"]);
console.log(arr1);

const nodeList = document.querySelectorAll("li");
console.log(nodeList);
const listArray = Array.from(nodeList);
console.log(listArray);

*/

/*
Method to manipulate the array

const arr = ["test", 2, "hello", 6];
console.log(arr);

const val = arr.pop();
console.log(val);
console.log(arr);
arr.push("hey");
console.log(arr);

arr.unshift("General");
console.log(arr);

arr[1] = "Kenobi";
console.log(arr);

const name = arr.shift();
const surname = arr.shift();

console.log(`${name}  ${surname}`);

console.log(arr);

const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);

arr1.splice(0, 0, 21, 24);

console.log(arr1);

let deletedElements = arr1.splice(2, 5);
console.log(deletedElements);
console.log(arr1);


console.log(deletedElements);


console.log(arr1);


const arr1 = [2, 45, 4.33, 673, 8, 3];
console.log(arr1);

const copy = arr1.slice();

console.log(copy);

const arr1 = ["hello", "there"];
const kenobi = ["General", "Kenobi"];
arr5 = arr1.slice();

const arr2 = arr1.concat(kenobi);

console.log(arr2);

arr1.push(kenobi);

console.log(arr1);

arr5.push(...kenobi);
console.log(arr5);

*/

/*

Findng the index of values in arrays

const greeting = "hello";

console.log(greeting);

console.log("God damn");

const arr1 = [1, 3, 5, 8.5, 3, "hello", { profession: "Jedi Master" }];

console.log(arr1.indexOf(5));

console.log(arr1.lastIndexOf(3));

console.log(arr1.indexOf({ profession: "Jedi" }));

*/

/*
Find methods in js

const personData = [{ name: "Thomas" }, { name: "Ozil" }, { name: "Max" }];

const person = personData.find((player, idx, playerList) => {
    console.log(idx);
    return player.name === "Max";
});

const personIndex = personData.findIndex((player, idx, playerList) => {
    console.log(idx);
    return player.name === "Max";
});

personData[0].name = "Horace";

console.log(person);

console.log(personIndex);


const arr1 = [3, 5, 6, "hello", 6, 7];

console.log(arr1.includes("hello"));

*/

/* 

Methods to sort the array, map and forEach loops

const prices = [10, 50, 55, 78, 100];
const taxValue = 0.5;
const taxAdjusted = [];

prices.forEach((element, idx, prices) => {
    const priceObject = { index: idx, taxPrice: element * (1 + taxValue) };
    taxAdjusted.push(priceObject);
});

console.log(taxAdjusted);

const mappedArray = prices.map((e) => e * 2);
console.log(mappedArray);

const personData = [{ name: "Thomas" }, { name: "Ozil" }, { name: "Max" }];

const person = personData.find((person) => {
    return person.name === "Thomas";
});

console.log(person);

const mappedPriceArray = prices.map((price, idx, prices) => {
    return { index: idx, value: price * (1 + taxValue) };
});

console.log(mappedPriceArray);

console.log(mappedArray);

console.log(mappedArray.sort());

const reverseArray = mappedArray.reverse();
console.log(reverseArray);

const sortedArray = mappedArray.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});

console.log(sortedArray);


const arr = [3, 6, 22, 18.5, 90];

const into2 = arr.map((e) => e * 2);

console.log(into2);

const above40 = into2.filter((e) => e > 40);
console.log(above40);

const complicatedSum = arr.reduce((prevValue, currentValue, idx, arr) => {
    return prevValue + currentValue;
}, 0);

console.log(complicatedSum);

const sum = arr.reduce((sum, value) => sum + value);

console.log(sum);


const arr = [10, 34, 88, "hello", 87];

copy = arr.slice(0, 3);
console.log(copy);

const valu = arr.splice(-2, 1, 45, 90);
console.log(valu);

console.log(arr);



const value = "hello;test;god;damn";

const valueArray = value.split(";");

console.log(valueArray);

console.log(valueArray.join(";") === value);

const copy = [...valueArray];

const numArray = [2, 55, 78, 33, 99];

console.log(Math.max(...numArray));

console.log(copy);


const person = ["General", "Kenobi", "Jedi", "Master"];

const [firstName, lastName, ...rest] = person;

console.log(firstName, lastName, rest);

*/
