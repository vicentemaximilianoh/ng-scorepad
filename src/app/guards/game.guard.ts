import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from '../services/game.service';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {
  constructor(
    public gameService: GameService,
    public router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.gameService.getPlayers().length > 0) {
        return true;
      }

      this.router.navigate(['']);

      return false;
  }
  
}
