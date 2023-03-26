import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRenderComponent } from './template-render.component';
import { TemplateExampleComponent } from './example/template-example.component';
import {PageRenderModule} from "../../shared/page-render/page-render.module";
import {ExampleComponent} from "../../common/example/example.component";

@NgModule({
  declarations: [
    TemplateRenderComponent,
    TemplateExampleComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class TemplateRenderModule { }
