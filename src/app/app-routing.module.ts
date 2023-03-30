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
import {ServiceObservablesComponent} from "./components/service-observables/service-observables.component";
import {ServicePromiseComponent} from "./components/service-promise/service-promise.component";
import {ServicePipesComponent} from "./components/service-pipes/service-pipes.component";
import {DirectiveEventComponent} from "./components/directive-event/directive-event.component";
import {PropertyBindingComponent} from "./components/property-binding/property-binding.component";

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
    },
    {
        path: 'observables',
        component: ServiceObservablesComponent
    },
    {
        path: 'promises',
        component: ServicePromiseComponent
    },
    {
        path: 'rxjs-pipes',
        component: ServicePipesComponent
    },
    {
        path: 'directive',
        component: DirectiveEventComponent
    },
    {
        path: 'property-binding',
        component: PropertyBindingComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
