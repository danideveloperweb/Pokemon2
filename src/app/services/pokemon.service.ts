import { Injectable } from '@angular/core';
import { IPokemon } from './model/pokemon.interface';
import { pokemon } from './model/pokemon.help';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: IPokemon[] = pokemon;
  constructor() { }

  getPokemon(): IPokemon[] {
    return this.pokemon;
  }

}
