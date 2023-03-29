import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { IPokemon } from 'src/app/services/model/pokemon.interface';
import { EPokemon } from 'src/app/services/model/pokemon.enum';
import { EEnPokemon } from 'src/app/services/model/enpokemon.enum';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {

  pokemonView: IPokemon[] | undefined;
  pokemonEn: IPokemon[] | undefined;

  typePlanta: EPokemon = EPokemon.PLANTA;
  typeFuego: EPokemon = EPokemon.FUEGO;
  typeElectrico: EPokemon = EPokemon.ELECTRICO;
  typeSiniestro: EPokemon = EPokemon.SINIESTRO;

  typePlant: EEnPokemon = EEnPokemon.PLANT;
  typeFire: EEnPokemon = EEnPokemon.FIRE;
  typeElectric: EEnPokemon = EEnPokemon.ELECTRIC;
  typeSinister: EEnPokemon = EEnPokemon.SINISTER;
  
  pokemonPlanta: IPokemon[] = [];
  pokemonFuego: IPokemon[] = [];
  pokemonElectrico: IPokemon[] = [];
  pokemonSiniestro: IPokemon[] = [];

  pokemonPlant: IPokemon[] = [];
  pokemonFire: IPokemon[] = [];
  pokemonElectric: IPokemon[] = [];
  pokemonSinister: IPokemon[] = [];

  constructor(private pokemonService: PokemonService, public translate: TranslateService) {

    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    this.pokemonView = this.pokemonService.getPokemon();
    this.pokemonEn = this.pokemonService.getEngPokemon();

    this.pokemonPlanta = this.pokemonView.filter(pokemon => pokemon.number <= 3);
    this.pokemonFuego = this.pokemonView.filter(pokemon => pokemon.number >= 4 && pokemon.number <= 6);
    this.pokemonElectrico = this.pokemonView.filter(pokemon => pokemon.number >= 7 && pokemon.number <= 8);
    this.pokemonSiniestro = this.pokemonView.filter(pokemon => pokemon.number === 9);

    this.pokemonPlant = this.pokemonEn.filter(pokemon => pokemon.number <= 3);
    this.pokemonFire = this.pokemonEn.filter(pokemon => pokemon.number >= 4 && pokemon.number <= 6);
    this.pokemonElectric = this.pokemonEn.filter(pokemon => pokemon.number >= 7 && pokemon.number <= 8);
    this.pokemonSinister = this.pokemonEn.filter(pokemon => pokemon.number === 9);
  }
}
