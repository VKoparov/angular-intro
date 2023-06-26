import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-cypress',
    templateUrl: './cypress.component.html',
    styleUrls: ['./cypress.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CypressComponent {

    header: string = 'Cypress';

    links: { name: string, path: string }[] = [
        { name: 'Component Inheritance', path: '/component-inheritance' }
    ];
}
