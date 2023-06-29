import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadFileComponent } from './read-file.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ReadFileComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ReadFileModule { }

