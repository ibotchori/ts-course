// Basic types
let id: number = 5;
let company: string = "String";
let isPublished: boolean = true;

let x: any = "Hello";
x = 3;

let age: number;
age = 4;

// Arrays
let ids: number[] = [1, 2, 3, 4, 5, 6];
let arr: any[] = [true, 4, "String"];

// Tuples
let person: [number, string, boolean] = [1, "Text", false];

// Tuple Array
let employ: [number, string][];
employ = [
  [2, "text"],
  [1, "John"],
  [3, "Mike"],
];

// Union
let pid: string | number;
pid = 3;

// Enum
enum Direction1 {
  Up = 8,
  Down,
  Left,
  Right,
}

console.log(Direction1.Left); // = 10

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Left); // = 10

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
customerId = 2;
