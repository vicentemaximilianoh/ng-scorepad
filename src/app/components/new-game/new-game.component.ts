import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  players = [];
  playerName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addPlayer(): void {
    this.players.push({
      name: this.playerName,
      score: 0,
      rounds: [],
      hasLost: false
    });

    this.playerName = '';
  }

  goToSetupGame() {

  }


}
