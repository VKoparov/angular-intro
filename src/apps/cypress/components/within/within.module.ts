import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithinComponent } from './within.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";



@NgModule({
  declarations: [
    WithinComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class WithinModule { }
