import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private players = [];
  private totalLimit;
  private discountScore;
  private isStarted = false;
  private isEnded = false;

  constructor() { }

  getPlayers() {
    return this.players;
  }

  addPlayer(playerName: string) {
    this.players.push({
      name: playerName,
      score: 0,
      rounds: [],
      hasLost: false
    });
  }

  startGame(settings) {
    this.totalLimit = settings.totalLimit;
    this.discountScore = settings.discountScore;
    this.isStarted = true;
  }
}
