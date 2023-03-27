import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-example',
  templateUrl: './parent-example.component.html',
  styleUrls: ['./parent-example.component.css']
})
export class ParentExampleComponent {

  gifUrl!: string;

  handleChildEvent(event: string) {
    this.gifUrl = event;
  }
}
