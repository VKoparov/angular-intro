import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadComponent } from './reload.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ReloadComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ReloadModule { }

