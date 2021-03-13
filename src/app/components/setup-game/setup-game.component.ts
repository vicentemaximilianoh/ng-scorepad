import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.scss']
})
export class SetupGameComponent implements OnInit {
  game: {};
  formGroup: FormGroup;

  constructor(
    public gameService: GameService, 
    public router: Router, 
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'totalLimit': new FormControl(this.gameService.DEFAULT_TOTAL_SCORE, [
        Validators.min(this.gameService.MIN_TOTAL_SCORE), 
        Validators.max(this.gameService.MAX_TOTAL_SCORE)
      ]),
      'discountScore': new FormControl(false),
      'oneLoserMode': new FormControl(false)
    });
  }

  setupGame() {
    console.log(this.formGroup);
    this.gameService.startGame({
      totalLimit: this.formGroup.value.totalLimit,
      discountScore: this.formGroup.value.discountScore,
      oneLoserMode: this.formGroup.value.oneLoserMode,
    });

    // Go to game rounds route
    this.router.navigate(['rounds']);
  }

}
