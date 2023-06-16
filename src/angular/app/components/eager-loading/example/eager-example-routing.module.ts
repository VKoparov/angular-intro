import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EagerExampleComponent} from "./eager-example.component";

const routes: Routes = [
  {
    path: '',
    component: EagerExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerExampleRoutingModule {}
