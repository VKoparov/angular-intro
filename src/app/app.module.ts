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
import {EagerLoadingModule} from "./components/eager-loading/eager-loading.module";
import {ExampleModule} from "./common/example/example.module";
import {NgIfModule} from "./components/ng-if/ng-if.module";
import {NgForModule} from "./components/ng-for/ng-for.module";
import {
    ParentChildCommunicationModule
} from "./components/parent-child-communication/parent-child-communication.module";
import {GuardCheckLoadModule} from "./components/guard-check-load/guard-check-load.module";
import {GuardExampleModule} from "./components/guard-check-load/example/guard-example.module";
import {PipeTransformerModule} from "./components/pipe-transformer/pipe-transformer.module";
import {NavigationModule} from "./shared/navigation/navigation.module";
import {ServiceObservablesModule} from "./components/service-observables/service-observables.module";
import {ServicePromiseModule} from "./components/service-promise/service-promise.module";
import {ServicePipesModule} from "./components/service-pipes/service-pipes.module";
import {DirectiveEventModule} from "./components/directive-event/directive-event.module";
import {PropertyBindingModule} from "./components/property-binding/property-binding.module";

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
        EagerLoadingModule,
        LazyLoadingModule,
        NgIfModule,
        NgForModule,
        ParentChildCommunicationModule,
        GuardCheckLoadModule,
        GuardExampleModule,
        PipeTransformerModule,
        NavigationModule,
        ServiceObservablesModule,
        ServicePromiseModule,
        ServicePipesModule,
        DirectiveEventModule,
        PropertyBindingModule
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
