import ISwitchCommand from "./iswitch-command";
import Light from "./light";

export default class SwitchOnCommand implements ISwitchCommand {
  #light: Light;
  constructor(ligth: Light) {
    this.#light = ligth;
  }
  execute(commandName: string): void {
    this.#light.turnOn();
  }
}
