import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  header: string = 'Front-End Intro';

  headerBackgroundColor: string = 'white';

  links: { name: string, path: string }[] = [
    { name: 'Angular Tutorials', path: '/angular' },
    { name: 'Cypress Tutorials', path: '/cypress' }
  ];
}
