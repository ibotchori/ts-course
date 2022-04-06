"use strict";
// Basic types
let id = 5;
let company = "String";
let isPublished = true;
let x = "Hello";
x = 3;
let age;
age = 4;
// Arrays
let ids = [1, 2, 3, 4, 5, 6];
let arr = [true, 4, "String"];
// Tuples
let person = [1, "Text", false];
// Tuple Array
let employ;
employ = [
    [2, "text"],
    [1, "John"],
    [3, "Mike"],
];
// Union
let pid;
pid = 3;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 8] = "Up";
    Direction1[Direction1["Down"] = 9] = "Down";
    Direction1[Direction1["Left"] = 10] = "Left";
    Direction1[Direction1["Right"] = 11] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left); // = 10
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left); // = 10
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
customerId = 2;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
// void function, returns any type
function log(message) {
    console.log(message);
}
log(1);
