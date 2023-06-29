import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpectComponent } from './expect.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ExpectComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ExpectModule { }

