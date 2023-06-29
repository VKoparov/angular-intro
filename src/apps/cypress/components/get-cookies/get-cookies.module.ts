import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCookiesComponent } from './get-cookies.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        GetCookiesComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class GetCookiesModule { }

