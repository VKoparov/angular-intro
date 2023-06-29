import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShouldComponent } from './should.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ShouldComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ShouldModule { }

