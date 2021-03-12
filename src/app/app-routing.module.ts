import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NewGameComponent } from './components/new-game/new-game.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { SetupGameComponent } from './components/setup-game/setup-game.component';
import { GameGuard } from './guards/game.guard';

const routes: Routes = [
    { 
        path: '', 
        component: NewGameComponent 
    },
    {   
        path: 'setupGame', 
        component: SetupGameComponent,
        canActivate: [GameGuard]
    },
    {   
        path: 'rounds', 
        component: RoundsComponent,
        canActivate: [GameGuard] 
    },
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }