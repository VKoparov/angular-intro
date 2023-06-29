import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssertComponent } from './assert.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        AssertComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class AssertModule { }

