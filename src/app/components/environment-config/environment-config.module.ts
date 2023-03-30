import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentConfigComponent } from './environment-config.component';
import {PageRenderModule} from "../../shared/page-render/page-render.module";

@NgModule({
  declarations: [
    EnvironmentConfigComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class EnvironmentConfigModule { }
