import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {NextAllComponent} from "./next-all.component";

@NgModule({
  declarations: [
      NextAllComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class NextAllModule { }
