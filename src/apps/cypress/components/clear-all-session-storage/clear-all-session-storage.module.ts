import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearAllSessionStorageComponent } from './clear-all-session-storage.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        ClearAllSessionStorageComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class ClearAllSessionStorageModule { }

