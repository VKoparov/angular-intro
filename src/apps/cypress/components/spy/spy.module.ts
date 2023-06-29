import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpyComponent } from './spy.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        SpyComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class SpyModule { }

