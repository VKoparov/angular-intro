import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsComponent } from './parents.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    ParentsComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class ParentsModule { }
