import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div class="body">
      <h2 class="header" *ngIf="header">{{ header }}</h2>
      <img src="https://media.giphy.com/media/3ohzdZ44Q62CJ2ekla/giphy.gif" alt="">
    </div>
  `,
  styleUrls: ['example.component.css']
})
export class ExampleComponent {

  @Input() header!: string;
}
