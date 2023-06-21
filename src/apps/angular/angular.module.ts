import {NgModule} from '@angular/core';
import {AngularComponent} from './angular.component';
import {TemplateRenderModule} from "./components/template-render/template-render.module";
import {DynamicRenderModule} from "./components/dynamic-render/dynamic-render.module";
import {LazyLoadingModule} from "./components/lazy-loading/lazy-loading.module";
import {EagerLoadingModule} from "./components/eager-loading/eager-loading.module";
import {NgIfModule} from "./components/ng-if/ng-if.module";
import {NgForModule} from "./components/ng-for/ng-for.module";
import {ParentChildCommunicationModule} from "./components/parent-child-communication/parent-child-communication.module";
import {GuardCheckLoadModule} from "./components/guard-check-load/guard-check-load.module";
import {GuardExampleModule} from "./components/guard-check-load/example/guard-example.module";
import {PipeTransformerModule} from "./components/pipe-transformer/pipe-transformer.module";
import {ServiceObservablesModule} from "./components/service-observables/service-observables.module";
import {ServicePromiseModule} from "./components/service-promise/service-promise.module";
import {ServicePipesModule} from "./components/service-pipes/service-pipes.module";
import {DirectiveEventModule} from "./components/directive-event/directive-event.module";
import {PropertyBindingModule} from "./components/property-binding/property-binding.module";
import {EnvironmentConfigModule} from "./components/environment-config/environment-config.module";
import {ComponentInheritanceModule} from "./components/component-inheritance/component-inheritance.module";
import {AngularRoutingModule} from "./angular-routing.module";
import {NavigationModule} from "../app/shared/navigation/navigation.module";
import {CommonModule, NgForOf} from "@angular/common";
import {BaseModule} from "../app/common/base/base.module";
import {RouterLink} from "@angular/router";

@NgModule({
    declarations: [
        AngularComponent
    ],
    imports: [
        CommonModule,
        BaseModule,
        NavigationModule,
        AngularRoutingModule,
        TemplateRenderModule,
        DynamicRenderModule,
        EagerLoadingModule,
        LazyLoadingModule,
        ParentChildCommunicationModule,
        GuardCheckLoadModule,
        GuardExampleModule,
        PipeTransformerModule,
        ServiceObservablesModule,
        ServicePromiseModule,
        ServicePipesModule,
        DirectiveEventModule,
        PropertyBindingModule,
        EnvironmentConfigModule,
        ComponentInheritanceModule
    ]
})
export class AngularModule {}
