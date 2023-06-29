import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeComponent } from './type.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        TypeComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class TypeModule { }

