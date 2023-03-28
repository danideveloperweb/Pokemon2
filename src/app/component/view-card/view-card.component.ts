import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { IPokemon } from 'src/app/services/model/pokemon.interface';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {

  pokemonView: IPokemon[] | undefined;

  constructor(private pokemonService: PokemonService, public translate: TranslateService) {

    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {

    this.pokemonView = this.pokemonService.getPokemon();
  }
}
