// A Game Class that uses the Leadership Singleton

import Leaderbord from "./leaderboard";
import Game from "./igame";

export class Game1 implements Game {
  leaderboard: Leaderbord;

  constructor() {
    this.leaderboard = new Leaderbord();
  }

  addWinner(position: number, name: string): void {
    this.leaderboard.addWinner(position, name);
  }
}
