let foo: string;
let bar: boolean;
let baz: number;
let qux: string[];
let quuz: [number, string];
let corge: { [key: number]: string };
let grault: Set<number>;

foo = "ABC";
bar = true;
baz = 123;
qux = ["a", "b", "c"];
quuz = [1, "abc"];
corge = { 123: "abc", 456: "def" };
grault = new Set([1, 2, 3]);

let a: { [key: number]: string };
a = { 123: "abc", 456: "def" };
let b: { [key: string]: boolean };
b = { abc: true, def: false, ghi: true };

console.log(a[123]);
console.log(b["def"]);

// class Cat {
//   name: string;
//   stepsWalked: number = 0;
//   constructor(name: string) {
//     this.name = name;
//   }

//   walk(steps: number): void {
//     console.log(this.name + " cat has walked " + steps + " steps.");
//     this.stepsWalked += steps;
//   }

//   totalStepCount(): number {
//     return this.stepsWalked;
//   }
// }

// const CAT = new Cat("Cosmo");
// CAT.walk(20);
// CAT.walk(20);
// console.log(
//   CAT.name +
//     " the cat, has walked a total of  " +
//     CAT.totalStepCount() +
//     " steps"
// );

interface IAnimal {
  name: string;
  age: number;

  feed(food: string, amount: number): void;
}

class Cat implements IAnimal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  feed(food: string, amount: number): void {
    console.log(
      "Feeding " + this.name + " the Cat " + amount + " kg of " + food
    );
  }
}

class Dog implements IAnimal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  feed(food: string, amount: number): void {
    console.log(
      "Feeding " + this.name + " the Dog " + amount + " kg of " + food
    );
  }
}

const CAT = new Cat("Cosmo", 8);
const DOG = new Dog("Rusty", 12);
CAT.feed("Fish", 0.1);
DOG.feed("Beef", 0.25);
