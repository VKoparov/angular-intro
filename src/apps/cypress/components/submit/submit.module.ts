import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './submit.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        SubmitComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class SubmitModule { }

