import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {ParentsUntilComponent} from "./parents-until.component";

@NgModule({
  declarations: [
      ParentsUntilComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class ParentsUntilModule { }
