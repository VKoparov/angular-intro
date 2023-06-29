import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EachComponent } from './each.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        EachComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class EachModule { }

