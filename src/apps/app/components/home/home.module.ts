import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {HOME_THEME} from "../../themes/home-theme";
import {THEME_CONFIG} from "../../models/theme";
import {NavigationModule} from "../../shared/navigation/navigation.module";
import {RouterLink} from "@angular/router";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        NavigationModule,
        RouterLink,
        HomeRoutingModule
    ],
    providers: [
        { provide: THEME_CONFIG, useValue: HOME_THEME }
    ]
})
export class HomeModule {}
