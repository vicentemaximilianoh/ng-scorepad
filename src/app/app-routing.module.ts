import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NewGameComponent } from './components/new-game/new-game.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { SetupGameComponent } from './components/setup-game/setup-game.component';

const routes: Routes = [
    { path: '', component: NewGameComponent },
    { path: 'setupGame', component: SetupGameComponent },
    { path: 'rounds', component: RoundsComponent },
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }