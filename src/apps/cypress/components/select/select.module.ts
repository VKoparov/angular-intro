import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        SelectComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class SelectModule { }

