import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriggerComponent } from './trigger.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        TriggerComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class TriggerModule { }

