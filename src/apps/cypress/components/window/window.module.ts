import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        WindowComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class WindowModule { }

