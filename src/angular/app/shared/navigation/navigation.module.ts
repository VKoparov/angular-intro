import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import {ButtonsModule} from "../buttons/buttons.module";

@NgModule({
  declarations: [
    NavTopComponent,
    NavFooterComponent
  ],
  exports: [
    NavTopComponent,
    NavFooterComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ]
})
export class NavigationModule { }
