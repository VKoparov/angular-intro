import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainsComponent } from './contains.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    ContainsComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class ContainsModule { }
