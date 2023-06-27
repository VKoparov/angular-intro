import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetComponent } from './get.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {ButtonsModule} from "../../../app/shared/buttons/buttons.module";

@NgModule({
  declarations: [
    GetComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class GetModule { }
