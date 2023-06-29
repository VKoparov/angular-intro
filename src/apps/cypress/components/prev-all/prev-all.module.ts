import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {PrevAllComponent} from "./prev-all.component";

@NgModule({
  declarations: [
      PrevAllComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class PrevAllModule { }
