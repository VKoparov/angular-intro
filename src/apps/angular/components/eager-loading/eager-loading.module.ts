import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerLoadingComponent } from './eager-loading.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {EagerExampleModule} from "./example/eager-example.module";

@NgModule({
  declarations: [
    EagerLoadingComponent,
  ],
  imports: [
    CommonModule,
    EagerExampleModule,
    PageRenderModule
  ]
})
export class EagerLoadingModule { }
