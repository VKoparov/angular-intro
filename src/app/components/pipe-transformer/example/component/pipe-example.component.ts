import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent {

  text: string = 'I am an {0} text, waiting to be {1}!';

  isApplied: boolean = false;

  actionButtonText: string = 'Apply Pipe';

  handleClickEvent() {
    this.isApplied = !this.isApplied;
  }
}
