import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class FilterModule { }
