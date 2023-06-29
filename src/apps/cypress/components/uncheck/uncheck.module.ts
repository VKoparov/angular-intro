import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncheckComponent } from './uncheck.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        UncheckComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class UncheckModule { }

