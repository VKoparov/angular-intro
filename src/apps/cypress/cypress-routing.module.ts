import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CypressComponent} from "./cypress.component";
import {GetComponent} from "./components/get/get.component";
import {ContainsComponent} from "./components/contains/contains.component";
import {WithinComponent} from "./components/within/within.component";
import {RootComponent} from "./components/root/root.component";
import {ChildrenComponent} from "./components/children/children.component";

const routes: Routes = [
    {
        path: '',
        component: CypressComponent
    },
    {
        path: 'get',
        component: GetComponent
    },
    {
        path: 'contains',
        component: ContainsComponent
    },
    {
        path: 'within',
        component: WithinComponent
    },
    {
        path: 'root',
        component: RootComponent
    },
    {
        path: 'children',
        component: ChildrenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CypressRoutingModule {}
