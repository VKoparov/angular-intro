import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThenComponent } from './then.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ThenComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ThenModule { }

