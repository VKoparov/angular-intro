import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightclickComponent } from './rightclick.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        RightclickComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class RightclickModule { }

