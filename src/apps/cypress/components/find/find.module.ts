import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindComponent } from './find.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    FindComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class FindModule { }
