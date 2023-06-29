import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastComponent } from './last.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    LastComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class LastModule { }
