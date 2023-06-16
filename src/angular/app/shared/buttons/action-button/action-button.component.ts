import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: [
      './action-button.component.css',
      '../back-button/back-button.component.css'
  ]
})
export class ActionButtonComponent {

  @Input() buttonText!: string;
}
