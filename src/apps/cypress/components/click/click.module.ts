import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickComponent } from './click.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ClickComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ClickModule { }

