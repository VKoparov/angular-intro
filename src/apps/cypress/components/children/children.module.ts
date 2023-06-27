import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenComponent } from './children.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    ChildrenComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class ChildrenModule { }
