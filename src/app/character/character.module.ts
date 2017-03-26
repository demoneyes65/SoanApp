import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { SkillComponent } from './components/skill.component';
import { HeaderPanelComponent } from './components/header-panel.component';
import { PlayerPanelComponent } from './components/player-panel.component';
import { CharacterPanelComponent } from './components/character-panel.component';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule
  ],
  declarations: [SkillComponent, HeaderPanelComponent, PlayerPanelComponent, CharacterPanelComponent]
})
export class CharacterModule { }
