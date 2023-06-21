import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    BaseComponent
  ],
  exports: [
      BaseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class BaseModule { }
