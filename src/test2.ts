import { Cat, Dog } from "./animals";

const CAT = new Cat("Cosmo", 8);
console.log(CAT.name);

const DOG = new Dog("Rusty", 12);
console.log(DOG.name);

//Command patters is an interface with
//execute() method to implement
// this pattern is used when you need to do undos
// for example in GUIs
// you can go to the begining
// interface Task {
//   execute(): void;
//   undo(): void;
// }
// you need and actor to create the instances
// the undo can be hard for multi threads that points
// each to others
// make a big space for the stacks

// Actor modal
//sequence of commands
// share the unique stack that can be big
