import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageRenderComponent} from "./page-render.component";
import {ModalModule} from "../modal/modal.module";
import {ButtonsModule} from "../buttons/buttons.module";
import {NavigationModule} from "../navigation/navigation.module";
import {MaterialModule} from "../../material.module";
import {DynamicComponentDirective} from "../../directives/dynamic-component.directive";

@NgModule({
    declarations: [
        PageRenderComponent
    ],
    exports: [
        PageRenderComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ModalModule,
        ButtonsModule,
        NavigationModule
    ]
})
export class PageRenderModule {
}
