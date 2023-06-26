import {NgModule} from '@angular/core';
import {CypressComponent} from './cypress.component';
import {ComponentInheritanceModule} from "./components/component-inheritance/component-inheritance.module";
import {CypressRoutingModule} from "./cypress-routing.module";
import {NavigationModule} from "../app/shared/navigation/navigation.module";
import {CommonModule} from "@angular/common";
import {BaseModule} from "../app/common/base/base.module";
import {THEME_CONFIG} from "../app/models/theme";
import {CYPRESS_THEME} from "./theme/cypress-theme";

@NgModule({
    declarations: [
        CypressComponent
    ],
    imports: [
        CommonModule,
        BaseModule,
        NavigationModule,
        CypressRoutingModule,
        ComponentInheritanceModule
    ],
    providers: [
        { provide: THEME_CONFIG, useValue: CYPRESS_THEME }
    ]
})
export class CypressModule {}
