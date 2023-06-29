import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsComponent } from './as.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        AsComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class AsModule { }

