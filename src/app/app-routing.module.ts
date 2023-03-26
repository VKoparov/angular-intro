import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleGuard} from "./guards/example.guard";
import {HomeComponent} from "./components/home/home.component";
import {TemplateRenderComponent} from "./components/template-render/template-render.component";
import {DynamicRenderComponent} from "./components/dynamic-render/dynamic-render.component";
import {LazyLoadingComponent} from "./components/lazy-loading/lazy-loading.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'template-render',
        component: TemplateRenderComponent
    },
    {
        path: 'dynamic-render',
        component: DynamicRenderComponent
    },
    {
        path: 'lazy-loading',
        loadChildren: () => import('./components/lazy-loading/lazy-loading.module')
            .then((m) => m.LazyLoadingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
