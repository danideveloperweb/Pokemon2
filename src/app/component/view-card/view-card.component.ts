import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { IPokemon } from 'src/app/services/model/pokemon.interface';
import { EPokemon } from 'src/app/services/model/pokemon.enum';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {

  pokemonView: IPokemon[] | undefined;
  typePlanta: EPokemon = EPokemon.PLANTA;
  typeFuego: EPokemon = EPokemon.FUEGO;
  typeElectrico: EPokemon = EPokemon.ELECTRICO;
  typeSiniestro: EPokemon = EPokemon.SINIESTRO;
  pokemonPlanta: IPokemon[] = [];
  pokemonFuego: IPokemon[] = [];
  pokemonElectrico: IPokemon[] = [];
  pokemonSiniestro: IPokemon[] = [];

  constructor(private pokemonService: PokemonService, public translate: TranslateService) {

    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    this.pokemonView = this.pokemonService.getPokemon();
    this.pokemonPlanta = this.pokemonView.filter(pokemon => pokemon.numero <= 3);
    this.pokemonFuego = this.pokemonView.filter(pokemon => pokemon.numero >= 4 && pokemon.numero <= 6);
    this.pokemonElectrico = this.pokemonView.filter(pokemon => pokemon.numero >= 7 && pokemon.numero <= 8);
    this.pokemonSiniestro = this.pokemonView.filter(pokemon => pokemon.numero === 9);
  }
}
