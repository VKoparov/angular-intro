import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportComponent } from './viewport.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ViewportComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ViewportModule { }

