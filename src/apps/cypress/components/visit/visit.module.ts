import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitComponent } from './visit.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        VisitComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class VisitModule { }

