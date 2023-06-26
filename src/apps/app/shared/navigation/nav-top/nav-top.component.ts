import {Component, Inject, Input} from '@angular/core';
import {Theme, THEME_CONFIG} from "../../../models/theme";

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent {

  @Input() header!: string;

  protected theme!: Theme;

  constructor(
      @Inject(THEME_CONFIG) theme: Theme
  ) {
    this.theme = theme;
  }
}
