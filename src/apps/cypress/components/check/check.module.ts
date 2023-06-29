import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        CheckComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class CheckModule { }

