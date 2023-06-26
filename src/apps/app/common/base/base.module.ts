import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from './base.component';
import {HttpClientModule} from "@angular/common/http";
import {PageRenderModule} from "../../shared/page-render/page-render.module";

@NgModule({
    declarations: [
        BaseComponent
    ],
    exports: [
        BaseComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        PageRenderModule
    ]
})
export class BaseModule {
}
