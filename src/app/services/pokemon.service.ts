import { Injectable } from '@angular/core';
import { IPokemon } from './model/pokemon.interface';
import { pokemon } from './model/pokemon.help';
import { Enpokemon } from './model/enpokemon.help';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: IPokemon[] = pokemon;
  englipokemon: IPokemon[] = Enpokemon;
  constructor() { }

  getPokemon(): IPokemon[] {
    return this.pokemon;
  }
  getEngPokemon(): IPokemon[] {
    return this.englipokemon;
  }

}
