import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NewGameComponent } from './components/new-game/new-game.component';
import { SetupGameComponent } from './components/setup-game/setup-game.component';

const routes: Routes = [
    { path: '', component: NewGameComponent },
    { path: 'setupGame', component: SetupGameComponent },
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }