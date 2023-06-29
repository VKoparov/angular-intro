import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapComponent } from './wrap.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        WrapComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class WrapModule { }

