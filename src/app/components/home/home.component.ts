import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    links: { name: string, path: string }[] = [
        { name: 'Template Render', path: '/template-render' },
        { name: 'Dynamic Render', path: '/dynamic-render' },
        { name: 'Lazy Loading', path: '/lazy-loading' }
    ];
}
