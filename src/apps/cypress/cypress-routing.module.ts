import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CypressComponent} from "./cypress.component";
import {ComponentInheritanceComponent} from "./components/component-inheritance/component-inheritance.component";

const routes: Routes = [
    {
        path: '',
        component: CypressComponent
    },
    {
        path: 'component-inheritance',
        component: ComponentInheritanceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CypressRoutingModule {}
