import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyLoadingComponent} from "./lazy-loading.component";
import {LazyLoadingRoutingModule} from "./lazy-loading-routing.module";
import {PageRenderModule} from "../../shared/page-render/page-render.module";
import {HttpClientModule} from "@angular/common/http";

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
