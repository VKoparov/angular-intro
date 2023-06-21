import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIfComponent } from './ng-if.component';
import {NgIfExampleComponent} from "./example/ng-if-example.component";
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {ButtonsModule} from "../../../app/shared/buttons/buttons.module";

@NgModule({
  declarations: [
    NgIfComponent,
    NgIfExampleComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule,
    ButtonsModule
  ]
})
export class NgIfModule { }
