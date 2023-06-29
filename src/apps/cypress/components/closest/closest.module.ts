import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClosestComponent } from './closest.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    ClosestComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class ClosestModule { }
