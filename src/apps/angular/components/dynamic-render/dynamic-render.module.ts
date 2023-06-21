import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRenderComponent } from './dynamic-render.component';
import { DynamicExampleComponent } from './example/component/dynamic-example.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {DynamicViewRenderModule} from "../../../app/directives/dynamic-view-render.module";
import {DynamicComponentDirective} from "./example/directives/dynamic-component.directive";

@NgModule({
  declarations: [
    DynamicRenderComponent,
    DynamicExampleComponent,
    DynamicComponentDirective
  ],
  imports: [
    CommonModule,
    PageRenderModule,
    DynamicViewRenderModule
  ]
})
export class DynamicRenderModule { }
