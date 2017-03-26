import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { CharacterComponent } from './character/character.component';
import { ExperienceComponent } from './player/experience/experience.component';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    CharacterComponent,
    ExperienceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }