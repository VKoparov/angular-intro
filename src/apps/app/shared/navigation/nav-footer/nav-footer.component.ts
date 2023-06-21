import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent {

  @Input() actionButtonText!: string;

  @Input() shouldHaveActionButton: boolean = false;

  @Output() emitAction: EventEmitter<void> = new EventEmitter();

  handleClickAction() {
    this.emitAction.emit();
  }
}
