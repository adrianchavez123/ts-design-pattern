// The ATM Dispenser Chain

import Dispenser10 from "./dispenser10";
import Dispenser20 from "./dispenser20";
import Dispenser50 from "./dispenser50";

export default class ATMDispenserChain {
  chain1: Dispenser10;
  chain2: Dispenser20;
  chain3: Dispenser50;

  constructor() {
    // initializing the successor chain
    this.chain1 = new Dispenser10();
    this.chain2 = new Dispenser20();
    this.chain3 = new Dispenser50();

    // Setting a default successor chain that will process the 50s first.
    // the 20s second and the 10s last. The succesor chain will be
    // recalculated dynamically at runtime.
    this.chain1.nextSuccessor(this.chain2);
    this.chain2.nextSuccessor(this.chain3);
  }
}
