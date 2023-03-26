import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {HighlightModule} from "ngx-highlightjs";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {highlightConfig} from "./config/providers-config";
import {TemplateRenderModule} from "./components/template-render/template-render.module";
import {DynamicRenderModule} from "./components/dynamic-render/dynamic-render.module";
import {LazyLoadingModule} from "./components/lazy-loading/lazy-loading.module";
import {BaseModule} from "./common/base/base.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        HighlightModule,
        MaterialModule,
        BaseModule,
        TemplateRenderModule,
        DynamicRenderModule,
        LazyLoadingModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        highlightConfig
    ]
})
export class AppModule {
}
