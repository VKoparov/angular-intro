import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearAllLocalStorageComponent } from './clear-all-local-storage.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ClearAllLocalStorageComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ClearAllLocalStorageModule { }

