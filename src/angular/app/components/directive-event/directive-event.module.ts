import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveEventComponent } from './directive-event.component';
import { DirectiveExampleComponent } from './example/component/directive-example.component';
import {PageRenderModule} from "../../shared/page-render/page-render.module";
import { ScrollEventDirective } from './example/directive/scroll-event.directive';

@NgModule({
  declarations: [
    DirectiveEventComponent,
    DirectiveExampleComponent,
    ScrollEventDirective
  ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class DirectiveEventModule { }
