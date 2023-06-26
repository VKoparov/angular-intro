import {NgModule} from '@angular/core';
import {CypressComponent} from './cypress.component';
import {ComponentInheritanceModule} from "./components/component-inheritance/component-inheritance.module";
import {CypressRoutingModule} from "./cypress-routing.module";
import {NavigationModule} from "../app/shared/navigation/navigation.module";
import {CommonModule, NgForOf} from "@angular/common";
import {BaseModule} from "../app/common/base/base.module";

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
    ]
})
export class CypressModule {}
