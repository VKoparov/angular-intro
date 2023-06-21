import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePipesComponent } from './service-pipes.component';
import {ExampleComponent} from "./example/component/example.component";
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {ButtonsModule} from "../../../app/shared/buttons/buttons.module";

@NgModule({
  declarations: [
    ServicePipesComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule,
    ButtonsModule
  ]
})
export class ServicePipesModule { }
