import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllCookiesComponent } from './get-all-cookies.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        GetAllCookiesComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class GetAllCookiesModule { }

