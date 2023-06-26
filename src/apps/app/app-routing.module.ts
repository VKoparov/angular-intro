import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => import('./components/home/home.module')
            .then((m) => m.HomeModule)
    },
    {
        path: 'angular',
        loadChildren: () => import('../angular/angular.module')
            .then((m) => m.AngularModule)
    },
    {
        path: 'cypress',
        loadChildren: () => import('../cypress/cypress.module')
            .then((m) => m.CypressModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
