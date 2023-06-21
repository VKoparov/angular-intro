import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyLoadingComponent} from "./lazy-loading.component";
import {LazyLoadingRoutingModule} from "./lazy-loading-routing.module";
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        LazyLoadingComponent
    ],
    imports: [
        CommonModule,
        LazyLoadingRoutingModule,
        PageRenderModule
    ]
})
export class LazyLoadingModule { }
