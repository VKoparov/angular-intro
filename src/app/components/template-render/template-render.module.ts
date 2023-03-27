import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRenderComponent } from './template-render.component';
import { TemplateExampleComponent } from './example/template-example.component';
import {PageRenderModule} from "../../shared/page-render/page-render.module";
import {ExampleModule} from "../../common/example/example.module";

@NgModule({
  declarations: [
    TemplateRenderComponent,
    TemplateExampleComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule,
    ExampleModule
  ]
})
export class TemplateRenderModule { }
