import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusComponent } from './focus.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        FocusComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class FocusModule { }

