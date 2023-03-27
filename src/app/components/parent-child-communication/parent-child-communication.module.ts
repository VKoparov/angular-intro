import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentChildCommunicationComponent } from './parent-child-communication.component';
import { ParentExampleComponent } from './example/parent-example/parent-example.component';
import { ChildExampleComponent } from './example/child-example/child-example.component';
import {PageRenderModule} from "../../shared/page-render/page-render.module";

@NgModule({
  declarations: [
    ParentChildCommunicationComponent,
    ParentExampleComponent,
    ChildExampleComponent
  ],
  imports: [
    CommonModule,
    PageRenderModule
  ]
})
export class ParentChildCommunicationModule { }
