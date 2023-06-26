import {Component, Inject} from '@angular/core';
import {Theme, THEME_CONFIG} from "../app/models/theme";

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrls: ['./angular.component.css']
})
export class AngularComponent {

    protected theme!: Theme;

    header: string = 'Angular';

    links: { name: string, path: string }[] = [
        { name: 'Template Render', path: '/template-render' },
        { name: 'Dynamic Render', path: '/dynamic-render' },
        { name: 'Eager Loading', path: '/eager-loading' },
        { name: 'Lazy Loading', path: '/lazy-loading' },
        { name: '*ngIf', path: '/ng-if' },
        { name: '*ngFor', path: '/ng-for' },
        { name: 'Parent/Child Communication', path: '/parent-child-communication' },
        { name: 'Guard', path: '/guard' },
        { name: 'Pipe', path: '/pipe' },
        { name: 'Directive', path: '/directive' },
        { name: 'Observables', path: '/observables' },
        { name: 'Promises', path: '/promises' },
        { name: 'RxJS Pipes', path: '/rxjs-pipes' },
        { name: 'Property Binding', path: '/property-binding' },
        { name: 'Environment', path: '/environment' },
        { name: 'Component Inheritance', path: '/component-inheritance' }
    ];

    constructor(
        @Inject(THEME_CONFIG) theme: Theme
    ) {
        this.theme = theme;
    }
}
