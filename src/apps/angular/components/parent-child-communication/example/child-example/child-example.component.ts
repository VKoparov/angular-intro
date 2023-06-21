import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-example',
  templateUrl: './child-example.component.html',
  styleUrls: ['./child-example.component.css']
})
export class ChildExampleComponent implements OnInit {

  @Input() gifUrl: string = 'https://media.giphy.com/media/H1xUZ3h4ecdGl90Wa1/giphy.gif';

  @Output() event: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    setTimeout(() => {
      this.event.emit('https://media.giphy.com/media/3ohzdZ44Q62CJ2ekla/giphy.gif');
    }, 1500);
  }
}
