import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackButtonComponent} from "./back-button/back-button.component";
import {RouterLink} from "@angular/router";
import {ActionButtonComponent} from "./action-button/action-button.component";


@NgModule({
  declarations: [
      BackButtonComponent,
      ActionButtonComponent
  ],
  exports: [
      BackButtonComponent,
      ActionButtonComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class ButtonsModule { }
