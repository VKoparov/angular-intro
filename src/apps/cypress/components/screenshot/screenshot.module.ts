import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenshotComponent } from './screenshot.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ScreenshotComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ScreenshotModule { }

