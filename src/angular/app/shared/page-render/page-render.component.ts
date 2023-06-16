import {Component, Input} from '@angular/core';
import {FlipAnimationState} from "../../models/flip-animation-state";
import {SourceCodeView} from "../../models/source-code";

@Component({
    selector: 'app-render-page',
    templateUrl: 'page-render.component.html',
    styleUrls: ['./page-render.component.css']
})
export class PageRenderComponent {

    @Input() header!: string;

    @Input() data!: SourceCodeView;

    actionButtonText: string = 'Demo';

    state: FlipAnimationState = FlipAnimationState.CODE;

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
