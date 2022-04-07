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

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  // private id: number; // access this property only this class
  // protected name: string; // access this property only this class, or extended class
  id: number;
  name: string;
  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
  register() {
    // return 1 // register must be a string
    return `${this.name} is now registered`;
  }
}

const brad = new Person(32, "Brad");
const mike = new Person(18, "Mike");

console.log(brad, mike);

console.log(brad.register());

// console.log(brad.id); // can't access

// Extending Classes (Subclasses)
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Janet", "Developer");

console.log(emp.register());

// Generics (Reusable components)
function getArray<T>(items: T[]): T[] {
  // <T> is a placeholder for type
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]); // define type here, instead <T>
let strArray = getArray<string>(["Brad", "John", "Jill"]); // define type here, instead <T>

strArray.push("");
