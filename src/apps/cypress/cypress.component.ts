import {Component, Inject} from '@angular/core';
import {Theme, THEME_CONFIG} from "../app/models/theme";

@Component({
    selector: 'app-cypress',
    templateUrl: './cypress.component.html',
    styleUrls: ['./cypress.component.css']
})
export class CypressComponent {

    protected theme!: Theme;

    header: string = 'Cypress';

    groups: { name: string, items: { name: string, path: string }[] }[] = [
        {
            name: 'Alice', items: [
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' }
            ]
        },
        {
            name: 'Bob', items: [
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' },
                { name: 'Type of Test', path: '/component-inheritance' }
            ]
        }
    ];

    constructor(
        @Inject(THEME_CONFIG) theme: Theme
    ) {
        this.theme = theme;
    }
}
