import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItsComponent } from './its.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ItsComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ItsModule { }

