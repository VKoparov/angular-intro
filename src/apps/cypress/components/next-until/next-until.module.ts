import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {NextUntilComponent} from "./next-until.component";

@NgModule({
  declarations: [
      NextUntilComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class NextUntilModule { }
