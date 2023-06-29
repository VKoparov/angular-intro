import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetCookieComponent } from './set-cookie.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        SetCookieComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class SetCookieModule { }

