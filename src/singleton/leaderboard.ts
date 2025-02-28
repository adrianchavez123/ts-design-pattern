// A Leaderbord Singleton Class

export default class Leaderbord {
  static instance: Leaderbord;
  #table: { [id: number]: string } = {};

  constructor() {
    if (Leaderbord.instance) {
      return Leaderbord.instance;
    }
    Leaderbord.instance = this;
  }

  public addWinner(position: number, name: string): void {
    this.#table[position] = name;
  }

  public print(): void {
    console.log("-------Leaderboard-----------");
    for (const key in this.#table) {
      console.log(`|\t${key}\t|\t${this.#table[key]}\t|`);
    }
    console.log();
  }
}
