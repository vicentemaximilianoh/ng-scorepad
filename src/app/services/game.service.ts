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
  private oneLoserMode;
  private started = false;
  private over = false;

  private readonly INITIAL_SCORE = 0;
  public readonly DEFAULT_TOTAL_SCORE = 100;
  public readonly MIN_TOTAL_SCORE = 50;
  public readonly MAX_TOTAL_SCORE = 500;
  public readonly DISCOUNT_SCORE = -10;
  public readonly NO_SCORE = 0;

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

  get isOneLoserMode(): boolean {
    return this.oneLoserMode;
  }

  set isOneLoserMode(val: boolean) {
    this.oneLoserMode = val;
  }

  get isDiscountScoreAllowed(): boolean {
    return this.discountScore;
  }

  set isDiscountScoreAllowed(val: boolean) {
    this.discountScore = val;
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
      score: this.INITIAL_SCORE,
      rounds: [],
      isLoser: false
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

    });

    this.rounds.push(round);

    this.checkLoserPlayers();
    this.calculateIsGameOver();
  }

  startGame(settings) {
    this.totalLimit = settings.totalLimit;
    this.discountScore = settings.discountScore;
    this.oneLoserMode = settings.oneLoserMode;
    this.started = true;
    this.over = false;
  }

  reset() {
    this.started = false;
    this.over = true;
    this.players = [];
    this.rounds = [];

    this.currentHand = undefined;
    this.totalLimit = undefined;
    this.discountScore = undefined;
  }

  private calculateRoundHand(): void {
    let hand;
    if (this.currentHand === undefined || (this.currentHand+1) === this.players.length) {
      hand = this.getFirstActivePlayerIndex();
    } else {
      hand=this.currentHand+1;
    }

    // If selected hand is an inactive (loser) player, then look for next one.
    while(this.players[hand].isLoser) {
      this.calculateRoundHand();
    }
    this.currentHand = hand;
  }

  private checkLoserPlayers() {
    this.players.forEach((p) => {
      if (p.score > this.totalLimit) {
        p.isLoser = true;
      }
    })
  }

  public getFirstActivePlayerIndex() {
    return this.players.findIndex((p) => !p.isLoser);
  }

  private getActivePlayers() {
    return this.players.filter((p) => !p.isLoser);
  }

  private getLoserPlayers() {
    return this.players.filter((p) => p.isLoser);
  }

  private calculateIsGameOver() {
    // End game if:
    // - one loser mode is enabled and loser player is at least one.
    // - one loser mode is disabled, then check loser players quantity is equal or just one NOT loser player.
    const loserPlayers = this.getLoserPlayers().length;

    if ((this.oneLoserMode && loserPlayers >= 1) || 
      (!this.oneLoserMode && (loserPlayers >= this.players.length-1))) {
        // player.isLoser = true;
        this.isOver = true;
      }
  }

}
