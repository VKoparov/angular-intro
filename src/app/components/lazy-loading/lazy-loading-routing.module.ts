import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LazyLoadingComponent} from "./lazy-loading.component";

const routes: Routes = [
  {
    path: '',
    component: LazyLoadingComponent
  },
  {
    path: 'example',
    loadChildren: () => import('./example/lazy-example.module')
        .then((m) => m.LazyExampleModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule {}
