import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePromiseComponent } from './service-promise.component';
import {ExampleComponent} from "./example/component/example.component";
import {PageRenderModule} from "../../shared/page-render/page-render.module";
import {ButtonsModule} from "../../shared/buttons/buttons.module";

@NgModule({
  declarations: [
    ServicePromiseComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule,
    ButtonsModule
  ]
})
export class ServicePromiseModule { }
