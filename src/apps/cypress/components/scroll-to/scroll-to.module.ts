import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToComponent } from './scroll-to.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ScrollToComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ScrollToModule { }

