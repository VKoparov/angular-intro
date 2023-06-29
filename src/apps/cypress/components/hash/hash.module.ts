import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashComponent } from './hash.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        HashComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class HashModule { }

