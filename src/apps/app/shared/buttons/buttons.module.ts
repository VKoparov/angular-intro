import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {ActionButtonComponent} from "./action-button/action-button.component";

@NgModule({
  declarations: [
      ActionButtonComponent
  ],
  exports: [
      ActionButtonComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class ButtonsModule { }
