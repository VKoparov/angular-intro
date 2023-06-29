import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlComponent } from './url.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        UrlComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class UrlModule { }

