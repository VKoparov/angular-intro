import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class RootModule { }
