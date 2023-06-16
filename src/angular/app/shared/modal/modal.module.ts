import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SourceCodeViewModalComponent} from "./sorce-code-view-modal/source-code-view-modal.component";
import {HighlightModule} from "ngx-highlightjs";
import {MaterialModule} from "../../material.module";
import {DemoCodeViewModalComponent} from './demo-code-view-modal/demo-code-view-modal.component';
import {DynamicComponentDirective} from "../../directives/dynamic-component.directive";
import {DynamicViewRenderModule} from "../../directives/dynamic-view-render.module";


@NgModule({
    declarations: [
        SourceCodeViewModalComponent,
        DemoCodeViewModalComponent
    ],
    exports: [
        SourceCodeViewModalComponent,
        DemoCodeViewModalComponent
    ],
    imports: [
        CommonModule,
        HighlightModule,
        MaterialModule,
        DynamicViewRenderModule
    ]
})
export class ModalModule {
}
