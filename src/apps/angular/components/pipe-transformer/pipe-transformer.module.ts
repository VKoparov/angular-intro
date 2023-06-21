import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeTransformerComponent } from './pipe-transformer.component';
import { PipeExampleComponent } from './example/component/pipe-example.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {FormatTextPipe} from "./example/pipe/format-text.pipe";
import {ButtonsModule} from "../../../app/shared/buttons/buttons.module";

@NgModule({
  declarations: [
    PipeTransformerComponent,
    PipeExampleComponent,
    FormatTextPipe
  ],
  imports: [
    CommonModule,
    PageRenderModule,
    ButtonsModule
  ]
})
export class PipeTransformerModule { }
