import { Component } from '@angular/core';

@Component({
  selector: 'app-guard-example',
  templateUrl: './guard-example.component.html',
  styleUrls: ['./guard-example.component.css']
})
export class GuardExampleComponent {

  actionButtonText: string = 'Navigate';

  shouldShow: boolean = false;

  handleClickEvent() {
    this.shouldShow = !this.shouldShow;
  }
}
