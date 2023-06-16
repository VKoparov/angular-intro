import {Component} from '@angular/core';
import { PokemonService } from '../../../../services/pokemon.service';

@Component({
  selector: 'app-observables-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  pokemon: any = {
    name: '',
    abilities: [
      {
        ability: {
          name: ''
        }
      }
    ],
    types: [
      {
        type: {
          name: ''
        }
      }
    ],
  };

  actionButtonText: string = 'Load';

  isClicked: boolean = false;

  constructor(
      private observablesService: PokemonService
  ) {}

  async handleClickEvent() {
    this.isClicked = !this.isClicked;
    this.pokemon = await this.observablesService.getPokemonByName('charmander')
        .toPromise()
  }
}
