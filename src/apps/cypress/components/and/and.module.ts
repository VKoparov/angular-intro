import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AndComponent } from './and.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        AndComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class AndModule { }

