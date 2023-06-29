import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        <%= classify(name) %>Component
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class <%= classify(name) %>Module { }

