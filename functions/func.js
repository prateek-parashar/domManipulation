/*
 The goal of this file is to create a function
 that works something like this ->
 sum(2)(5) == 7; (true)
*/

/*
    The trick is to return a function that takes in the input and maintain
    a local property inside the function that keeps track of the sum. 

    Finally, we have to modify the way the object coersion works to return the correct property
*/

function sum(value) {
    let totalSum = value;

    function f(b) {
        totalSum += b;
        return f;
    }

    f.toString = function () {
        return totalSum;
    };

    return f;
}

console.log(sum(3)(6));

const test = function (value) {
    console.log(value);
    return function (greeting) {
        console.log(greeting);
    };
};

test("name")("hello");
