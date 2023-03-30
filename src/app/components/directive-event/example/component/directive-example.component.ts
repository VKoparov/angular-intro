import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {

  scrollMessage: string = 'Not Scrolling';

  elements: any[] = Array.from(Array(26).keys());

  onScrollStart() {
    this.scrollMessage = 'Scrolling';
  }

  onScrollEnd() {
    this.scrollMessage = 'Not Scrolling';
  }
}
