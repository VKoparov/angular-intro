import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptComponent } from './intercept.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        InterceptComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class InterceptModule { }

