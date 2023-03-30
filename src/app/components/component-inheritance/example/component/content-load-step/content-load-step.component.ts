import {Component, EventEmitter, Input} from '@angular/core';
import {FrameContent} from "../../model/frame-content";
import {FrameComponent} from "../frame/frame.component";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-content-load-step',
  template: `
      <div class="content">
        <div class="header">{{ header }}</div>
          <div *ngIf="isClicked" class="pokemon-info">
              <div class="name"><b>Name:</b> {{ pokemon.name }}</div>
              <div class="ability"><b>Ability:</b> {{ pokemon.abilities[0].ability.name }}</div>
              <div class="type"><b>Type:</b> {{ pokemon.types[0].type.name }}</div>
          </div>
          <app-action-button class="btn" (click)="mainAction()" [buttonText]="'Load'"></app-action-button>
      </div>
  `,
  styleUrls: ['./content-load-step.component.css']
})
export class ContentLoadStepComponent implements FrameContent {

  header: string = 'Pokemon';

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

  isClicked: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  mainAction(): void {
    this.isClicked = !this.isClicked;
    this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/charizard`)
        .subscribe(res => this.pokemon = res);
  }
}
