import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvokeComponent } from './invoke.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        InvokeComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class InvokeModule { }

