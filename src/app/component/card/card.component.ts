import { Component, Input } from '@angular/core';
import { IPokemon } from 'src/app/services/model/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() pokemonCard!: IPokemon;

}
