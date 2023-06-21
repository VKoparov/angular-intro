import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EagerExampleRoutingModule} from "./eager-example-routing.module";
import {EagerExampleComponent} from "./eager-example.component";
import {ExampleModule} from "../../../../app/common/example/example.module";

@NgModule({
  declarations: [
    EagerExampleComponent
  ],
  imports: [
    CommonModule,
    EagerExampleRoutingModule,
    ExampleModule
  ]
})
export class EagerExampleModule { }
