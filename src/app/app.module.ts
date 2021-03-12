import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { SetupGameComponent } from './components/setup-game/setup-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    SetupGameComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
