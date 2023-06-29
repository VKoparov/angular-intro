import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitComponent } from './wait.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        WaitComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class WaitModule { }

