import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

  public players = [];
  public rounds = [];
  public scores = {};

  constructor(
    public gameService: GameService, 
    public router: Router
  ) { }

  ngOnInit(): void {
    this.players = this.gameService.getPlayers();
    this.rounds = this.gameService.getRounds();
  }

  isGameStarted() {
    return this.gameService.isStarted;
  }

  isGameOver() {
    return this.gameService.isOver;
  }

  isFirstRound(): boolean {
    return this.rounds.length === 1;
  }

  isLastRound(index: number): boolean {
    return this.rounds.length === index + 1;
  }

  addRound() {
    this.gameService.addRound(this.scores);

    // if (this.gameService.isOver) {
    //   this.result = `${player.name} sos LOSER!!!`;
    // }

    this.scores = {};

    // (this.$refs.addRoundForm as HTMLFormElement).reset();

    // (this.$refs.playerScore as HTMLInputElement[])[0].focus();
  }

  resetGame() {
    this.gameService.reset();
    this.router.navigate(['']);
  }

}
