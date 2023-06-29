import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ClockComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ClockModule { }

