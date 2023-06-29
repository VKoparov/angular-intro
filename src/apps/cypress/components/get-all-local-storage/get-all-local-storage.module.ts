import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllLocalStorageComponent } from './get-all-local-storage.component';
import {PageRenderModule} from "../../../app/shared/page-render/page-render.module";

@NgModule({
    declarations: [
        GetAllLocalStorageComponent
    ],
    imports: [
        CommonModule,
        PageRenderModule
    ]
})
export class GetAllLocalStorageModule { }

