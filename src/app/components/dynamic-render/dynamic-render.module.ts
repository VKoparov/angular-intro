import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRenderComponent } from './dynamic-render.component';
import { DynamicExampleComponent } from './example/dynamic-example.component';
import {PageRenderModule} from "../../shared/page-render/page-render.module";
import {DynamicViewRenderModule} from "../../directives/dynamic-view-render.module";

@NgModule({
  declarations: [
    DynamicRenderComponent,
    DynamicExampleComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule,
    DynamicViewRenderModule
  ]
})
export class DynamicRenderModule { }
