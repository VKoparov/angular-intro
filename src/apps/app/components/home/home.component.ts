import {Component, Inject} from '@angular/core';
import {Theme, THEME_CONFIG} from "../../models/theme";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  protected theme!: Theme;

  header: string = 'Front-End Tutorials';

  links: { name: string, path: string }[] = [
    { name: 'Angular', path: '/angular' },
    { name: 'Cypress', path: '/cypress' }
  ];

  constructor(
      @Inject(THEME_CONFIG) theme: Theme
  ) {
    this.theme = theme;
  }
}
