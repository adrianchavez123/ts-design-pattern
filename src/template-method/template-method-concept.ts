// The Template Method Pattern Concept

abstract class AbstractClass {
  // A template class containing a template method and primitive methods

  stepOne(): void {
    // Hooks are normally empty in the abstract class. The
    // implementing class can optionally override providing a custom
    // implementation
  }

  abstract stepTwo(): void;
  // An abstract method that must be overriden in the implementing
  // class. It has been given `@abstractmethod` decorator so that
  // pylint show the error

  stepThree(): void {
    // Hooks can also contain default behavior and can be optionally
    // overriden
    console.log("Step Three is a hook that prints this line by default.");
  }

  templateMethod() {
    // This is the template method that the subclass will call.
    // The subclass (implementing class) doesn't need to override this
    // method since it has would have already optionally overriden
    // the following methods with its onw implementations
    this.stepOne();
    this.stepTwo();
    this.stepThree();
  }
}

class ConcreteClassA extends AbstractClass {
  // A concrete class that only override step two
  stepTwo(): void {
    console.log("Class_A: Step two (overriden)");
  }
}

class ConcreteClassB extends AbstractClass {
  // A concrete class that overrides one, two and three
  stepOne(): void {
    console.log("Class_B: Step one (overriden)");
  }
  stepTwo(): void {
    console.log("Class_B: Step two (overriden)");
  }
  stepThree(): void {
    console.log("Class_B: Step three (overriden)");
  }
}

// The Client
const CLASS_A = new ConcreteClassA();
CLASS_A.templateMethod();

const CLASS_B = new ConcreteClassB();
CLASS_B.templateMethod();
