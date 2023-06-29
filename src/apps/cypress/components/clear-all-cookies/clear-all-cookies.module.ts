import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearAllCookiesComponent } from './clear-all-cookies.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ClearAllCookiesComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ClearAllCookiesModule { }

