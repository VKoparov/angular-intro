import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FrameContent} from "../../model/frame-content";
import {FrameComponent} from "../frame/frame.component";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-information-step',
  template: `
    <div class="content">
      <div class="header">{{ header }}</div>
      <div class="description">{{ description }}</div>
      <app-action-button class="btn" (click)="mainAction()" [buttonText]="'Next'"></app-action-button>
    </div>
  `,
  styleUrls: ['./information-step.component.css']
})
export class InformationStepComponent implements FrameContent {

  header: string = 'Pokemon API';

  description: string = 'This website provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to Pokémon.';

  @Output() mainActionEvent: EventEmitter<any> = new EventEmitter<any>();

  mainAction(): void {
    this.mainActionEvent.emit(
        (frame: FrameComponent) => frame.index++
    );
  }
}
