import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private players = [];
  private rounds = [];
  private currentHand;// index of round players 

  private totalLimit;
  private discountScore;
  private started = false;
  private over = false;

  constructor() { }

  get isOver(): boolean {
    return this.over;
  }

  set isOver(val: boolean) {
    this.over = val;
  }

  get isStarted(): boolean {
    return this.started;
  }

  set isStarted(val: boolean) {
    this.started = val;
  }

  getPlayers() {
    return this.players;
  }

  getRounds() {
    return this.rounds;
  }

  addPlayer(playerName: string) {
    this.players.push({
      name: playerName,
      score: 0,
      rounds: [],
      hasLost: false
    });
  }

  addRound(scores) {
    this.calculateRoundHand();

    const round = {
      playersData: {},
      hand: this.currentHand
    };

    // round.playersData:  = {};
    this.players.forEach((player) => {
      const score: number = scores[player.name];
      player.score += +score;

      round.playersData[player.name] = player.score;

      if (player.score > this.totalLimit) {
        player.loser = true;
        this.isOver = true;
      }
    });

    this.rounds.push(round);
  }

  startGame(settings) {
    this.totalLimit = settings.totalLimit;
    this.discountScore = settings.discountScore;
    this.started = true;
    this.over = false;
  }

  reset() {
    this.started = false;
    this.over = true;
    this.players = [];
    this.rounds = [];

    this.currentHand = 0;
    this.totalLimit = undefined;
    this.discountScore = undefined;
  }

  private calculateRoundHand(): number {
    if (this.currentHand === undefined || (this.currentHand+1) === this.players.length) {
      this.currentHand = 0;
    } else {
      this.currentHand+=1;
    }
    return this.currentHand;
  }
}
