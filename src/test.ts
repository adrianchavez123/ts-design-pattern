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

// interface IAnimal {
//   name: string;
//   age: number;

//   feed(food: string, amount: number): void;
// }

// class Cat implements IAnimal {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   feed(food: string, amount: number): void {
//     console.log(
//       "Feeding " + this.name + " the Cat " + amount + " kg of " + food
//     );
//   }
// }

// class Dog implements IAnimal {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   feed(food: string, amount: number): void {
//     console.log(
//       "Feeding " + this.name + " the Dog " + amount + " kg of " + food
//     );
//   }
// }

// const CAT = new Cat("Cosmo", 8);
// const DOG = new Dog("Rusty", 12);
// CAT.feed("Fish", 0.1);
// DOG.feed("Beef", 0.25);

// class Animal {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   feed(food: string, amount: number): void {
//     console.log(
//       "Feeding " +
//         this.name +
//         " the " +
//         this.constructor.name +
//         " " +
//         amount +
//         " kg of " +
//         food
//     );
//   }
// }

// class Cat extends Animal {
//   isHungry: boolean;
//   constructor(name: string, age: number, isHungry: boolean) {
//     super(name, age);
//     this.isHungry = isHungry;
//   }

//   feed(food: string, amount: number): void {
//     if (this.isHungry) {
//       super.feed(food, amount);
//     } else {
//       console.log(
//         this.name + " the " + this.constructor.name + " is not hungry"
//       );
//     }
//   }
// }
// class Dog extends Animal {}

// const CAT = new Cat("Cosmo", 8, false);
// const DOG = new Animal("Rusty", 12);
// CAT.feed("Fish", 0.1);
// DOG.feed("Beef", 0.25);

// abstract class Animal {
//   abstract name: string;
//   age: number;

//   constructor(age: number) {
//     //this.name = name; //this must now be assigined in the derived class instead
//     this.age = age;
//   }

//   feed(food: string, amount: number): void {
//     console.log(
//       "Feeding " +
//         this.name +
//         " the " +
//         this.constructor.name +
//         " " +
//         amount +
//         " kg of " +
//         food
//     );
//   }
// }

// class Cat extends Animal {
//   name: string;
//   constructor(name: string, age: number) {
//     super(age);
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   name: string;
//   constructor(name: string, age: number) {
//     super(age);
//     this.name = name;
//   }
// }

// const CAT = new Cat("Cosmo", 8);
// const DOG = new Dog("Rusty", 12);
// CAT.feed("Fish", 0.1);
// DOG.feed("Beef", 0.25);

// //const CAT2 new Animal("Cosmo", 8); is not allowed

// abstract class Animal {
//   abstract name: string;
//   age = -1;
//   constructor() {}

//   abstract feed(food: string, amount: number): void;
// }

// class Cat extends Animal {
//   name: string;
//   constructor(name: string, age: number) {
//     super();
//     this.name = name;
//     this.age = age;
//   }

//   feed(food: string, amount: number): void {
//     console.log(
//       "Feeding " + this.name + " the Cat " + amount + " kg of " + food
//     );
//   }
// }

// class Dog extends Animal {
//   name: string;
//   constructor(name: string, age: number) {
//     super();
//     this.name = name;
//     this.age = age;
//   }

//   feed(food: string, amount: number): void {
//     console.log(
//       "Feeding " + this.name + " the Dog " + amount + " kg of " + food
//     );
//   }
// }

// const CAT = new Cat("Cosmo", 8);
// const DOG = new Dog("Rusty", 12);
// CAT.feed("Fish", 0.1);
// DOG.feed("Beef", 0.25);

// class Cat {
//   //private name: string;  //private only on ts
//   public name: string; //default
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const CAT = new Cat("Cosmo");
// console.log(CAT.name);

// class Cat {
//   #name: string;
//   constructor(name: string) {
//     this.#name = name;
//   }
// }

// const CAT = new Cat("Cosmo");
// console.log(CAT.#name); //this generates a compilation error

// class Animal {
//   protected name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.age = age;
//     this.name = name;
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, age: number) {
//     super(name, age);
//     console.log(this.name);
//   }
// }

// const CAT = new Cat("Cosmo", 8);
// // console.log(CAT.name); tsc complains but JS doesn't

class ClassWithProperty {
  abc = 123;
}

class ClassWithStaticProperty {
  static abc = 123;
}

class ClassWithMethod {
  method() {
    return 123;
  }
}

class ClassWithStaticMethod {
  static method() {
    return 123;
  }
}

const CLASS_A = new ClassWithProperty();
console.log(CLASS_A.abc);

const CLASS_B = new ClassWithStaticProperty();
//console.log(CLASS_B.abc); undefined. 'abc' does not
// exist on CLASS_B instance.
// You must reference it via the class name instead
console.log(ClassWithStaticProperty.abc);

const CLASS_C = new ClassWithMethod();
console.log(CLASS_C.method());

const CLASS_D = new ClassWithStaticMethod();
// console.log(CLASS_D.method()); // error. CLASS_D.method
// is not a function
console.log(ClassWithStaticMethod.method());

class Circle {
  radius: number;
  static PI = 3.14;
  constructor(radius: number) {
    this.radius = radius;
  }
}

console.log("Circle.PI " + Circle.PI);

const CIRCLE1 = new Circle(1);
const CIRCLE2 = new Circle(2);
const CIRCLE3 = new Circle(3);
console.log("CIRCLE1 Area = " + Circle.PI * CIRCLE1.radius ** 2);
console.log("CIRCLE2 Area = " + Circle.PI * CIRCLE2.radius ** 2);
console.log("CIRCLE2 Area = " + Circle.PI * CIRCLE3.radius ** 2);
