import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotComponent } from './not.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    NotComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class NotModule { }
