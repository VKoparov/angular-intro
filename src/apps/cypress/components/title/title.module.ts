import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        TitleComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class TitleModule { }

