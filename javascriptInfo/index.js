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
