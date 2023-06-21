import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LazyExampleComponent} from "./lazy-example.component";

const routes: Routes = [
  {
    path: '',
    component: LazyExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyExampleRoutingModule {}
