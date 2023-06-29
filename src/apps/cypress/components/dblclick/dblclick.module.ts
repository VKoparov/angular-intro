import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DblclickComponent } from './dblclick.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        DblclickComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class DblclickModule { }

