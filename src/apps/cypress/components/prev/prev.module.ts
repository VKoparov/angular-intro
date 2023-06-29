import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevComponent } from './prev.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    PrevComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class PrevModule { }
