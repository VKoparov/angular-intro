import {Component} from '@angular/core';
import { PokemonService } from '../../../../../app/services/pokemon.service';
import {map} from "rxjs";
import {response} from "express";

@Component({
  selector: 'app-observables-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  pokemon: { name: string, ability: string, type: string } = {
    name: '',
    ability: '',
    type: ''
  };

  actionButtonText: string = 'Load';

  isClicked: boolean = false;

  constructor(
      private observablesService: PokemonService
  ) {}

  handleClickEvent() {
    this.isClicked = !this.isClicked;
    this.observablesService.getPokemonByName('bulbasaur')
        .pipe(map(response => this.handleResponse(response)))
        .subscribe(response => this.pokemon = response);
  }

  private handleResponse(response: any): { name: string, ability: string, type: string } {
    return {
      name: response.name,
      ability: response.abilities[0].ability.name,
      type: response.types[0].type.name
    };
  }
}
