import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        DocumentComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class DocumentModule { }

