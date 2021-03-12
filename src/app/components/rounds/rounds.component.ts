import { Component, ElementRef, OnInit, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {
  @ViewChildren('scoreInputs') scoreInputs: QueryList<ElementRef>;

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

  addRound(f: NgForm) {
    this.gameService.addRound(this.scores);

    // Clean up scores info.
    this.scores = {};

    // Reset UI controls.
    f.reset();
    this.scoreInputs.get(this.gameService.getFirstActivePlayerIndex()).nativeElement.focus()
  }

  resetGame() {
    this.gameService.reset();
    this.router.navigate(['']);
  }

}
