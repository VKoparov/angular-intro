import {Component, Inject, Input} from '@angular/core';
import {FlipAnimationState} from "../../models/flip-animation-state";
import {SourceCodeView} from "../../models/source-code";
import {Theme, THEME_CONFIG} from "../../models/theme";

@Component({
    selector: 'app-render-page',
    templateUrl: 'page-render.component.html',
    styleUrls: ['./page-render.component.css']
})
export class PageRenderComponent {

    @Input() header!: string;

    @Input() data!: SourceCodeView;

    protected theme!: Theme;

    actionButtonText: string = 'Demo';

    state: FlipAnimationState = FlipAnimationState.CODE;

    constructor(
        @Inject(THEME_CONFIG) theme: Theme
    ) {
        this.theme = theme;
    }

    cardClicked() {
        if (this.state === FlipAnimationState.CODE) {
            this.state = FlipAnimationState.DEMO;
            this.actionButtonText = 'Code';
        } else {
            this.state = FlipAnimationState.CODE;
            this.actionButtonText = 'Demo';
        }
    }
}
