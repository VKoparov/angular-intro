import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiblingsComponent } from './siblings.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    SiblingsComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class SiblingsModule { }
