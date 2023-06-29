import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearCookiesComponent } from './clear-cookies.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ClearCookiesComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ClearCookiesModule { }

