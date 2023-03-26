import { Injectable } from '@angular/core';
import { Pokemon } from './model/pokemon.interface';
import { pokemon } from './model/pokemon.help';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: Pokemon[] = pokemon;
  constructor() { }

  getPokemon(): Pokemon[] {
    return this.pokemon;
  }

}
