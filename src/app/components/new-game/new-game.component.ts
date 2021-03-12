import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  players = [];
  playerName = '';

  constructor(
    public gameService: GameService,
    public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.players = this.gameService.getPlayers();
  }

  addPlayer(): void {
    this.gameService.addPlayer(this.playerName);

    this.playerName = '';
  }

  goToSetupGame() {
    this.router.navigate(['setupGame'], { relativeTo: this.route });
  }


}
