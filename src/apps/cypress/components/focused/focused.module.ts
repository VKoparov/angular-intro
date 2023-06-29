import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusedComponent } from './focused.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        FocusedComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class FocusedModule { }

