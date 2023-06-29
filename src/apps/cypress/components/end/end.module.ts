import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndComponent } from './end.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        EndComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class EndModule { }

