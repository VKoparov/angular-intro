import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExampleGuard} from "./guard/example.guard";

const routes: Routes = [
  {
    path: 'guard-example',
    loadChildren: () => import('../../../../app/common/example/example.module')
        .then((m) => m.ExampleModule),
    canActivate: [ExampleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardExampleRoutingModule { }
