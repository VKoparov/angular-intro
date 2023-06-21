import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardExampleRoutingModule } from './guard-example-routing.module';
import {GuardExampleComponent} from "./component/guard-example.component";
import {ButtonsModule} from "../../../../app/shared/buttons/buttons.module";

@NgModule({
  declarations: [
    GuardExampleComponent
  ],
  imports: [
    CommonModule,
    GuardExampleRoutingModule,
    ButtonsModule
  ]
})
export class GuardExampleModule { }
