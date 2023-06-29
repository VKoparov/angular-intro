import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class ParentModule { }
