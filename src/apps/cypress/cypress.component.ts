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
            name: 'Querying', items: [
                { name: 'get', path: '/get' },
                { name: 'contains', path: '/contains' },
                { name: 'within', path: '/within' },
                { name: 'root', path: '/root' }
            ]
        },
        {
            name: 'Traversal', items: [
                { name: 'children', path: '/children' },
                { name: 'closest', path: '/closest' },
                { name: 'eq', path: '/eq' },
                { name: 'filter', path: '/filter' },
                { name: 'find', path: '/find' },
                { name: 'first', path: '/first' },
                { name: 'last', path: '/last' },
                { name: 'next', path: '/next' },
                { name: 'nextAll', path: '/nextAll' },
                { name: 'nextUntil', path: '/nextUntil' },
                { name: 'not', path: '/not' },
                { name: 'parent', path: '/parent' },
                { name: 'parents', path: '/parents' },
                { name: 'parentsUntil', path: '/parentsUntil' },
                { name: 'prev', path: '/prev' },
                { name: 'prevAll', path: '/prevAll' },
                { name: 'prevUntil', path: '/prevUntil' },
                { name: 'siblings', path: '/siblings' }
            ]
        },
        {
            name: 'Actions', items: [
                { name: 'type', path: '/type' },
                { name: 'focus', path: '/focus' },
                { name: 'blur', path: '/blur' },
                { name: 'clear', path: '/clear' },
                { name: 'submit', path: '/submit' },
                { name: 'click', path: '/click' },
                { name: 'dblclick', path: '/dblclick' },
                { name: 'rightclick', path: '/rightclick' },
                { name: 'check', path: '/check' },
                { name: 'uncheck', path: '/uncheck' },
                { name: 'select', path: '/select' },
                { name: 'scrollIntoView', path: '/scrollIntoView' },
                { name: 'scrollTo', path: '/scrollTo' },
                { name: 'trigger', path: '/trigger' }
            ]
        },
        {
            name: 'Window', items: [
                { name: 'window', path: '/window' },
                { name: 'document', path: '/document' },
                { name: 'title', path: '/title' },
            ]
        },
        {
            name: 'Viewport', items: [
                { name: 'viewport', path: '/viewport' }
            ]
        },
        {
            name: 'Location', items: [
                { name: 'hash', path: '/hash' },
                { name: 'location', path: '/location' },
                { name: 'url', path: '/url' }
            ]
        },
        {
            name: 'Navigation', items: [
                { name: 'go', path: '/go' },
                { name: 'reload', path: '/reload' },
                { name: 'visit', path: '/visit' }
            ]
        },
        {
            name: 'Assertions', items: [
                { name: 'should', path: '/should' },
                { name: 'and', path: '/and' },
                { name: 'except', path: '/except' },
                { name: 'assert', path: '/assert' }
            ]
        },
        {
            name: 'Misc', items: [
                { name: 'end', path: '/end' },
                { name: 'exec', path: '/exec' },
                { name: 'focused', path: '/focused' },
                { name: 'screenshot', path: '/screenshot' },
                { name: 'wrap', path: '/wrap' }
            ]
        },
        {
            name: 'Connectors', items: [
                { name: 'each', path: '/each' },
                { name: 'its', path: '/its' },
                { name: 'invoke', path: '/invoke' },
                { name: 'spread', path: '/spread' },
                { name: 'then', path: '/then' }
            ]
        },
        {
            name: 'Alias', items: [
                { name: 'as', path: '/as' }
            ]
        },
        {
            name: 'Waiting', items: [
                { name: 'wait', path: '/wait' }
            ]
        },
        {
            name: 'Network Request', items: [
                { name: 'server', path: '/server' },
                { name: 'request', path: '/request' },
                { name: 'route', path: '/route' }
            ]
        },
        {
            name: 'Files', items: [
                { name: 'fixture', path: '/fixture' },
                { name: 'readFile', path: '/readFile' },
                { name: 'writeFile', path: '/writeFile' }
            ]
        },
        {
            name: 'Storage', items: [
                { name: 'clearLocalStorage', path: '/clearLocalStorage' },
                { name: 'getAllLocalStorage', path: '/getAllLocalStorage' },
                { name: 'clearAllLocalStorage', path: '/clearAllLocalStorage' },
                { name: 'getAllSessionStorage', path: '/getAllSessionStorage' },
                { name: 'clearAllSessionStorage', path: '/clearAllSessionStorage' }
            ]
        },
        {
            name: 'Cookies', items: [
                { name: 'clearCookies', path: '/clearCookies' }
            ]
        },
        {
            name: 'Spies, Stubs & Clocks', items: [
                { name: 'spy', path: '/spy' },
                { name: 'stub', path: '/stub' },
                { name: 'clock', path: '/clock' },
                { name: 'tick', path: '/tick' }
            ]
        }
    ];

    constructor(
        @Inject(THEME_CONFIG) theme: Theme
    ) {
        this.theme = theme;
    }
}
