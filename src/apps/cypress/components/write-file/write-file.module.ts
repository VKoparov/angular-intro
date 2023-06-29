import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteFileComponent } from './write-file.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        WriteFileComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class WriteFileModule { }

