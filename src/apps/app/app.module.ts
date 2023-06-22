import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HighlightModule} from "ngx-highlightjs";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {highlightConfig} from "./config/providers-config";
import {AngularModule} from "../angular/angular.module";
import { HomeComponent } from './components/home/home.component';
import {NavigationModule} from "./shared/navigation/navigation.module";

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
        AngularModule,
        NavigationModule
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
