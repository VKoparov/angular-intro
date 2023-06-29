import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShouldCallbackComponent } from './should-callback.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ShouldCallbackComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ShouldCallbackModule { }

