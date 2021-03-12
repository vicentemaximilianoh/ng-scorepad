import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.scss']
})
export class SetupGameComponent implements OnInit {
  game: {};
  formGroup: FormGroup;

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'totalLimit': new FormControl(100),
      'discountScore': new FormControl(false)
    });
  }

  setupGame() {
    this.gameService.startGame({
      totalLimit: this.formGroup.value.totalLimit,
      discountScore: this.formGroup.value.discountScore
    });

    // Go to game rounds route
  }

}
