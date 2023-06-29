import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixtureComponent } from './fixture.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        FixtureComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class FixtureModule { }

