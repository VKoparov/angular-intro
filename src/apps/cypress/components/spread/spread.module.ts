import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadComponent } from './spread.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        SpreadComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class SpreadModule { }

