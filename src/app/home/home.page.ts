import { Component, OnInit } from '@angular/core';
import { Character } from '../core/model/character.model';
import { CharactersService } from '../core/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  characters: Character[];

  constructor(
    private characterService: CharactersService
  ) {
    this.getCharacters();
  }

  async getCharacters() {
    const resp = await this.characterService.getCharacters();
    this.characters = resp.results;
  }
}
