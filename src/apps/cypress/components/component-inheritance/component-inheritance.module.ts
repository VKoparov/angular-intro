import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInheritanceComponent } from './component-inheritance.component';
import { FrameComponent } from './example/component/frame/frame.component';
import { InformationStepComponent } from './example/component/information-step/information-step.component';
import { ContentLoadStepComponent } from './example/component/content-load-step/content-load-step.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";
import {DynamicViewRenderModule} from "../../../app/directives/dynamic-view-render.module";
import {ButtonsModule} from "../../../app/shared/buttons/buttons.module";

@NgModule({
  declarations: [
    ComponentInheritanceComponent,
    FrameComponent,
    InformationStepComponent,
    ContentLoadStepComponent
  ],
    imports: [
        CommonModule,
        PageRenderModule,
        DynamicViewRenderModule,
        ButtonsModule
    ]
})
export class ComponentInheritanceModule { }
