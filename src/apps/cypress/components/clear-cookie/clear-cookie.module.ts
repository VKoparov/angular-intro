import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearCookieComponent } from './clear-cookie.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ClearCookieComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ClearCookieModule { }

