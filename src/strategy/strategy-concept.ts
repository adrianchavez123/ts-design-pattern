// The Strategy Pattern Concept

class ObjectContext {
  //This is the object whose behavior will change

  request(strategy: IStrategyConstructor) {
    // The request is handle by the class passed in
    return new strategy();
  }
}

interface IStrategyConstructor {
  // A Constructor for the IStrategy
  new (): IStrategy;
}

interface IStrategy {
  // A strategy Interface
  method(): string;
}

class ConcreteStrategyA implements IStrategy {
  // A Concretee Strategy Subclass
  method(): string {
    return "I am ConcreteStrategyA";
  }
}

class ConcreteStrategyB implements IStrategy {
  // A Concretee Strategy Subclass
  method(): string {
    return "I am ConcreteStrategyB";
  }
}

class ConcreteStrategyC implements IStrategy {
  // A Concretee Strategy Subclass
  method(): string {
    return "I am ConcreteStrategyC";
  }
}

// The Client
const OBJECT_CONTEXT = new ObjectContext();

console.log(OBJECT_CONTEXT.request(ConcreteStrategyA).method());
console.log(OBJECT_CONTEXT.request(ConcreteStrategyB).method());
console.log(OBJECT_CONTEXT.request(ConcreteStrategyC).method());
