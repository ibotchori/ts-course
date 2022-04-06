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
// type can be used with primitives and unions
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

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 3));

// void function, returns any type
function log(message: string | number): void {
  console.log(message);
}

log(1);

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // age property is not necessary
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// user1.id = 3; ! <-- read only property

// you can't use interface with primitives

// interface Point = number | string;
// const p1: Point = 1;

// Function Interfaces
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
