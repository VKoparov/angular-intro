import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        LocationComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class LocationModule { }

