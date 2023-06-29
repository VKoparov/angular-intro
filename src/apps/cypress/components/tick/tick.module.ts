import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickComponent } from './tick.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        TickComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class TickModule { }

