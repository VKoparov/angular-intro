import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertyBindingComponent} from './property-binding.component';
import {ExampleComponent} from './example/example.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {ButtonsModule} from "../../../app/shared/buttons/buttons.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        PropertyBindingComponent,
        ExampleComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule,
        ButtonsModule,
        FormsModule
    ]
})
export class PropertyBindingModule {
}
