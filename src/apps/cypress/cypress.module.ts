import {NgModule} from '@angular/core';
import {CypressComponent} from './cypress.component';
import {CypressRoutingModule} from "./cypress-routing.module";
import {NavigationModule} from "../app/shared/navigation/navigation.module";
import {CommonModule} from "@angular/common";
import {BaseModule} from "../app/common/base/base.module";
import {THEME_CONFIG} from "../app/models/theme";
import {CYPRESS_THEME} from "./theme/cypress-theme";
import {GetModule} from "./components/get/get.module";
import {ContainsModule} from "./components/contains/contains.module";
import {WithinModule} from "./components/within/within.module";
import {RootModule} from "./components/root/root.module";
import {ChildrenModule} from "./components/children/children.module";

@NgModule({
    declarations: [
        CypressComponent
    ],
    imports: [
        CommonModule,
        BaseModule,
        NavigationModule,
        CypressRoutingModule,
        GetModule,
        ContainsModule,
        WithinModule,
        RootModule,
        ChildrenModule
    ],
    providers: [
        { provide: THEME_CONFIG, useValue: CYPRESS_THEME }
    ]
})
export class CypressModule {}
