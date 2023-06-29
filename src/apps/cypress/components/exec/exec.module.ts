import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecComponent } from './exec.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ExecComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ExecModule { }

