import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class FirstModule { }
