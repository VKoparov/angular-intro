import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {Location} from "@angular/common";
import {Theme, THEME_CONFIG} from "../../../models/theme";

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent {

  @Input() actionButtonText!: string;

  @Input() shouldHaveActionButton: boolean = false;

  @Output() emitAction: EventEmitter<void> = new EventEmitter();

  protected theme!: Theme;

  constructor(
      @Inject(THEME_CONFIG) theme: Theme,
      private location: Location
  ) {
    this.theme = theme;
  }

  handleBackClick() {
    this.location.back();
  }

  handleClickAction() {
    this.emitAction.emit();
  }
}
