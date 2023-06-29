import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlurComponent } from './blur.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        BlurComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class BlurModule { }

