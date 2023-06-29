import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearComponent } from './clear.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ClearComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ClearModule { }

