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
import {THEME_CONFIG} from "./models/theme";
import {HOME_THEME} from "./themes/home-theme";
import {HomeModule} from "./components/home/home.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        HighlightModule,
        HomeModule,
        AngularModule,
        MaterialModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        highlightConfig
    ]
})
export class AppModule {}
