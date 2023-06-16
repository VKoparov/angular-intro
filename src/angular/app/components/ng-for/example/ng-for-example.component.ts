import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent {

  gifs: string[] = [
      'https://media.giphy.com/media/3ohzdZ44Q62CJ2ekla/giphy.gif',
      'https://media.giphy.com/media/3ohzdZ44Q62CJ2ekla/giphy.gif',
      'https://media.giphy.com/media/3ohzdZ44Q62CJ2ekla/giphy.gif'
  ];
}
