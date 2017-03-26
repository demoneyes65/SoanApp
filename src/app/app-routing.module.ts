import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { CharacterComponent } from './character/character.component';
import { ExperienceComponent } from './player/experience/experience.component';

export const routes: Routes = ([
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'character', component: CharacterComponent },
  {path: 'player', component: PlayerComponent }
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
