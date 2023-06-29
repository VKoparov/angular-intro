import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollIntoViewComponent } from './scroll-into-view.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ScrollIntoViewComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ScrollIntoViewModule { }

