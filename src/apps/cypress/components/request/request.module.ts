import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        RequestComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class RequestModule { }

