import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EqComponent } from './eq.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    EqComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class EqModule { }
