import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/services/model/pokemon.interface';

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
