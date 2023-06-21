import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardCheckLoadComponent } from './guard-check-load.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import { GuardExampleComponent } from './example/component/guard-example.component';

@NgModule({
  declarations: [
    GuardCheckLoadComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class GuardCheckLoadModule { }
