import {Component} from '@angular/core';
import {PokemonService} from "../../../../../app/services/pokemon.service";

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

  handleClickEvent() {
    this.isClicked = !this.isClicked;
    this.observablesService.getPokemonByName('pidgeot')
        .subscribe(response => {
          this.pokemon = response;
        });
  }
}
