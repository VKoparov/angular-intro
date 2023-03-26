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

    state: FlipAnimationState = FlipAnimationState.PREVIEW;

    actionButtonText: string = 'Demo';

    cardClicked() {
        if (this.state === FlipAnimationState.PREVIEW) {
            this.state = FlipAnimationState.DEMO;
            this.actionButtonText = 'Preview'
        } else {
            this.state = FlipAnimationState.PREVIEW;
            this.actionButtonText = 'Demo'
        }
    }
}
