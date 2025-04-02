import IProteus from "./iproteus";
import Serpent from "./serpent";
import Lion from "./lion";

export default class Leopard implements IProteus {
  // Proteus in the form of Leopard

  name = "Leopard";

  tellMeTheFuture(): void {
    //Proteous will change to something random
    if (Math.floor(Math.random() * 2)) {
      Object.assign(this, new Lion());
      this.tellMeTheFuture = Lion.prototype.tellMeTheFuture;
      this.tellMeYourForm = Lion.prototype.tellMeYourForm;
    } else {
      Object.assign(this, new Serpent());
      this.tellMeTheFuture = Serpent.prototype.tellMeTheFuture;
      this.tellMeYourForm = Serpent.prototype.tellMeYourForm;
    }
  }

  tellMeYourForm(): void {
    console.log(`I am the form of ${this.name}`);
  }
}
