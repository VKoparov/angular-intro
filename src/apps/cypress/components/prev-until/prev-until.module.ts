import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {PrevUntilComponent} from "./prev-until.component";

@NgModule({
  declarations: [
      PrevUntilComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class PrevUntilModule { }
