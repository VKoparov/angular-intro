import {Component, Inject, Input} from '@angular/core';
import {Theme, THEME_CONFIG} from "../../../models/theme";

@Component({
    selector: 'app-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent {

    @Input() buttonText: string = 'Back';

    protected theme!: Theme;

    constructor(
        @Inject(THEME_CONFIG) theme: Theme
    ) {
        this.theme = theme;
    }
}
