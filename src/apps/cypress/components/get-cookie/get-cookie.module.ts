import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCookieComponent } from './get-cookie.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        GetCookieComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class GetCookieModule { }

