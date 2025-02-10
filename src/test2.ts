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

//abstract factory pattern
//the app doesn't need to know about the
// objects that the abstract factory make
//  (individual shape for example)
// hidden dependency the number of make methods
// example
// makeCircle()
// makeTriangle()
// makeSquare()

// you can have a single make method
// with a parameter with the type
// enums is not a solution to do not need
// to change the app
//it is better to use strings
// and have a getShape method that
// returns the valid strings that can
// be used to makeShape(string: type)

//factory method pattern
// not necesary an instance of the factory
//create the instance of the application
//just one directive
// same as abstract factory but without the interface

//prototype pattern
// logically equivalent to abstract factory
// but exchanges objects for methods
// initialize the field
// you have to use cast to use the setters

//if you what to initilize you need to know the type
// of the object

// static type

// Strategy pattern
// Its simple,like a simple interface
// where all the classes that inherits it
// uses the methods and build the implementation
// external polymorphisom
// if coupling is an issue this works better than
// template method
// easier to deploy

// template method pattern
// internal polymorphisom
// the structor is in the instance
