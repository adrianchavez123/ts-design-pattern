// The Chain of Responsibility Pattern Concept

interface IHandler {
  // The Handler Interface that the Succesor should implement
  handle(payload: number): number;
}

class Succesor1 implements IHandler {
  // A Concrete Handler
  handle(payload: number): number {
    console.log(`Successor1 payload = ${payload}`);
    const test = Math.floor(Math.random() * 2) + 1;
    if (test === 1) {
      payload += 1;
      payload = new Succesor1().handle(payload);
    } else {
      payload -= 1;
      payload = new Succesor2().handle(payload);
    }
    return payload;
  }
}

class Succesor2 implements IHandler {
  // A Concrete Handler
  handle(payload: number): number {
    console.log(`Successor2 payload = ${payload}`);
    const test = Math.floor(Math.random() * 3) + 1;
    if (test === 1) {
      payload = payload * 2;
      payload = new Succesor1().handle(payload);
    } else if (test === 2) {
      payload = payload / 2;
      payload = new Succesor2().handle(payload);
    } // if test = 3 the assign no further succesors
    return payload;
  }
}

class Chain {
  // A chain with a default first successor
  start(payload: number) {
    // Setting the first successor that will modify the payload
    return new Succesor1().handle(payload);
  }
}

// The Client
const CHAIN = new Chain();
const PAYLOAD = 1;
const OUT = CHAIN.start(PAYLOAD);
console.log(`Finished result = ${OUT}`);
