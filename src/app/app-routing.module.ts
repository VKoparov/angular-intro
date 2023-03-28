import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TemplateRenderComponent} from "./components/template-render/template-render.component";
import {DynamicRenderComponent} from "./components/dynamic-render/dynamic-render.component";
import {EagerLoadingComponent} from "./components/eager-loading/eager-loading.component";
import {LazyLoadingComponent} from "./components/lazy-loading/lazy-loading.component";
import {NgIfComponent} from "./components/ng-if/ng-if.component";
import {NgForComponent} from "./components/ng-for/ng-for.component";
import {
    ParentChildCommunicationComponent
} from "./components/parent-child-communication/parent-child-communication.component";
import {GuardCheckLoadComponent} from "./components/guard-check-load/guard-check-load.component";
import {PipeTransformerComponent} from "./components/pipe-transformer/pipe-transformer.component";

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
        path: 'eager-loading',
        component: EagerLoadingComponent
    },
    {
        path: 'lazy-loading',
        component: LazyLoadingComponent
    },
    {
        path: 'ng-if',
        component: NgIfComponent
    },
    {
        path: 'ng-for',
        component: NgForComponent
    },
    {
        path: 'parent-child-communication',
        component: ParentChildCommunicationComponent
    },
    {
        path: 'guard',
        component: GuardCheckLoadComponent
    },
    {
        path: 'pipe',
        component: PipeTransformerComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
