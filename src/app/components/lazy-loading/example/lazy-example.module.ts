import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyExampleComponent } from './lazy-example.component';
import {DynamicViewRenderModule} from "../../../directives/dynamic-view-render.module";
import {LazyExampleRoutingModule} from "./lazy-example-routing.module";

@NgModule({
  declarations: [
    LazyExampleComponent
  ],
  imports: [
    CommonModule,
    LazyExampleRoutingModule,
    DynamicViewRenderModule
  ]
})
export class LazyExampleModule {}
