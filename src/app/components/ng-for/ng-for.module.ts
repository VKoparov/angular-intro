import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForComponent } from './ng-for.component';
import {NgForExampleComponent} from "./example/ng-for-example.component";
import {PageRenderModule} from "../../shared/page-render/page-render.module";

@NgModule({
  declarations: [
    NgForComponent,
    NgForExampleComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class NgForModule { }
