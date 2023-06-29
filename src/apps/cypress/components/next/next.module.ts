import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextComponent } from './next.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    NextComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class NextModule { }
