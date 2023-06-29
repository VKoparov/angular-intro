import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearLocalStorageComponent } from './clear-local-storage.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ClearLocalStorageComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ClearLocalStorageModule { }

