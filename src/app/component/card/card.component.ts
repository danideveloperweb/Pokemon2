import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/services/model/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  pokemom: Pokemon[] = [];
  
  constructor(private pokemonService: PokemonService){}

  ngOnInit() {

    this.pokemom = this.pokemonService.getPokemon();

    }
}
