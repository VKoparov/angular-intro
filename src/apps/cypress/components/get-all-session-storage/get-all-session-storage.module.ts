import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllSessionStorageComponent } from './get-all-session-storage.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        GetAllSessionStorageComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class GetAllSessionStorageModule { }

