import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoComponent } from './go.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        GoComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class GoModule { }

