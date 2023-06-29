import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StubComponent } from './stub.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        StubComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class StubModule { }

