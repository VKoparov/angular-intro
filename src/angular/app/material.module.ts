import {NgModule} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MatTabsModule
    ]
})
export class MaterialModule {
}
