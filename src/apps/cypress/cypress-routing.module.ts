import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CypressComponent} from "./cypress.component";
import {GetComponent} from "./components/get/get.component";
import {ContainsComponent} from "./components/contains/contains.component";
import {WithinComponent} from "./components/within/within.component";
import {RootComponent} from "./components/root/root.component";
import {ChildrenComponent} from "./components/children/children.component";
import {ClosestComponent} from "./components/closest/closest.component";
import {EqComponent} from "./components/eq/eq.component";
import {FilterComponent} from "./components/filter/filter.component";
import {FindComponent} from "./components/find/find.component";
import {FirstComponent} from "./components/first/first.component";
import {LastComponent} from "./components/last/last.component";
import {NextComponent} from "./components/next/next.component";
import {NextAllComponent} from "./components/next-all/next-all.component";
import {NextUntilComponent} from "./components/next-until/next-until.component";
import {NotComponent} from "./components/not/not.component";
import {ParentComponent} from "./components/parent/parent.component";
import {ParentsComponent} from "./components/parents/parents.component";
import {ParentsUntilComponent} from "./components/parents-until/parents-until.component";
import {PrevComponent} from "./components/prev/prev.component";
import {PrevAllComponent} from "./components/prev-all/prev-all.component";
import {PrevUntilComponent} from "./components/prev-until/prev-until.component";
import {SiblingsComponent} from "./components/siblings/siblings.component";
import {TypeComponent} from "./components/type/type.component";
import {FocusComponent} from "./components/focus/focus.component";
import {BlurComponent} from "./components/blur/blur.component";
import {ClearComponent} from "./components/clear/clear.component";
import {SubmitComponent} from "./components/submit/submit.component";
import {ClickComponent} from "./components/click/click.component";
import {DblclickComponent} from "./components/dblclick/dblclick.component";
import {RightclickComponent} from "./components/rightclick/rightclick.component";
import {CheckComponent} from "./components/check/check.component";
import {UncheckComponent} from "./components/uncheck/uncheck.component";
import {SelectComponent} from "./components/select/select.component";
import {ScrollIntoViewComponent} from "./components/scroll-into-view/scroll-into-view.component";
import {ScrollToComponent} from "./components/scroll-to/scroll-to.component";
import {TriggerComponent} from "./components/trigger/trigger.component";
import {WindowComponent} from "./components/window/window.component";
import {DocumentComponent} from "./components/document/document.component";
import {TitleComponent} from "./components/title/title.component";
import {ViewportComponent} from "./components/viewport/viewport.component";
import {HashComponent} from "./components/hash/hash.component";
import {LocationComponent} from "./components/location/location.component";
import {UrlComponent} from "./components/url/url.component";
import {GoComponent} from "./components/go/go.component";
import {ReloadComponent} from "./components/reload/reload.component";
import {VisitComponent} from "./components/visit/visit.component";
import {ShouldComponent} from "./components/should/should.component";
import {AndComponent} from "./components/and/and.component";
import {ExpectComponent} from "./components/expect/expect.component";
import { AssertComponent } from './components/assert/assert.component';
import {ShouldCallbackComponent} from "./components/should-callback/should-callback.component";
import {EndComponent} from "./components/end/end.component";
import {ExecComponent} from "./components/exec/exec.component";
import {ScreenshotComponent} from "./components/screenshot/screenshot.component";
import {WrapComponent} from "./components/wrap/wrap.component";
import {EachComponent} from "./components/each/each.component";
import {ItsComponent} from "./components/its/its.component";
import {InvokeComponent} from "./components/invoke/invoke.component";
import {SpreadComponent} from "./components/spread/spread.component";
import {ThenComponent} from "./components/then/then.component";
import {AsComponent} from "./components/as/as.component";
import {WaitComponent} from "./components/wait/wait.component";
import {RequestComponent} from "./components/request/request.component";
import {InterceptComponent} from "./components/intercept/intercept.component";
import {FixtureComponent} from "./components/fixture/fixture.component";
import {ReadFileComponent} from "./components/read-file/read-file.component";
import {WriteFileComponent} from "./components/write-file/write-file.component";
import {ClearLocalStorageComponent} from "./components/clear-local-storage/clear-local-storage.component";
import {GetAllLocalStorageComponent} from "./components/get-all-local-storage/get-all-local-storage.component";
import {ClearAllLocalStorageComponent} from "./components/clear-all-local-storage/clear-all-local-storage.component";
import {GetAllSessionStorageComponent} from "./components/get-all-session-storage/get-all-session-storage.component";
import {
    ClearAllSessionStorageComponent
} from "./components/clear-all-session-storage/clear-all-session-storage.component";
import {GetCookieComponent} from "./components/get-cookie/get-cookie.component";
import {GetCookiesComponent} from "./components/get-cookies/get-cookies.component";
import {GetAllCookiesModule} from "./components/get-all-cookies/get-all-cookies.module";
import {SetCookieComponent} from "./components/set-cookie/set-cookie.component";
import {ClearCookieComponent} from "./components/clear-cookie/clear-cookie.component";
import {ClearCookiesComponent} from "./components/clear-cookies/clear-cookies.component";
import {ClearAllCookiesComponent} from "./components/clear-all-cookies/clear-all-cookies.component";
import {SpyComponent} from "./components/spy/spy.component";
import {StubComponent} from "./components/stub/stub.component";
import {ClockComponent} from "./components/clock/clock.component";
import {TickComponent} from "./components/tick/tick.component";

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
    },
    {
        path: 'closest',
        component: ClosestComponent
    },
    {
        path: 'eq',
        component: EqComponent
    },
    {
        path: 'filter',
        component: FilterComponent
    },
    {
        path: 'find',
        component: FindComponent
    },
    {
        path: 'first',
        component: FirstComponent
    },
    {
        path: 'last',
        component: LastComponent
    },
    {
        path: 'next',
        component: NextComponent
    },
    {
        path: 'next-all',
        component: NextAllComponent
    },
    {
        path: 'next-until',
        component: NextUntilComponent
    },
    {
        path: 'not',
        component: NotComponent
    },
    {
        path: 'parent',
        component: ParentComponent
    },
    {
        path: 'parents',
        component: ParentsComponent
    },
    {
        path: 'parents-until',
        component: ParentsUntilComponent
    },
    {
        path: 'prev',
        component: PrevComponent
    },
    {
        path: 'prev-all',
        component: PrevAllComponent
    },
    {
        path: 'prev-until',
        component: PrevUntilComponent
    },
    {
        path: 'siblings',
        component: SiblingsComponent
    },
    {
        path: 'type',
        component: TypeComponent
    },
    {
        path: 'focus',
        component: FocusComponent
    },
    {
        path: 'blur',
        component: BlurComponent
    },
    {
        path: 'clear',
        component: ClearComponent
    },
    {
        path: 'submit',
        component: SubmitComponent
    },
    {
        path: 'click',
        component: ClickComponent
    },
    {
        path: 'dblclick',
        component: DblclickComponent
    },
    {
        path: 'rightclick',
        component: RightclickComponent
    },
    {
        path: 'check',
        component: CheckComponent
    },
    {
        path: 'uncheck',
        component: UncheckComponent
    },
    {
        path: 'select',
        component: SelectComponent
    },
    {
        path: 'scroll-into-view',
        component: ScrollIntoViewComponent
    },
    {
        path: 'scroll-to',
        component: ScrollToComponent
    },
    {
        path: 'trigger',
        component: TriggerComponent
    },
    {
        path: 'window',
        component: WindowComponent
    },
    {
        path: 'document',
        component: DocumentComponent
    },
    {
        path: 'title',
        component: TitleComponent
    },
    {
        path: 'viewport',
        component: ViewportComponent
    },
    {
        path: 'hash',
        component: HashComponent
    },
    {
        path: 'location',
        component: LocationComponent
    },
    {
        path: 'url',
        component: UrlComponent
    },
    {
        path: 'go',
        component: GoComponent
    },
    {
        path: 'reload',
        component: ReloadComponent
    },
    {
        path: 'visit',
        component: VisitComponent
    },
    {
        path: 'should',
        component: ShouldComponent
    },
    {
        path: 'and',
        component: AndComponent
    },
    {
        path: 'expect',
        component: ExpectComponent
    },
    {
        path: 'assert',
        component: AssertComponent
    },
    {
        path: 'should-callback',
        component: ShouldCallbackComponent
    },
    {
        path: 'end',
        component: EndComponent
    },
    {
        path: 'exec',
        component: ExecComponent
    },
    {
        path: 'focused',
        component: FocusComponent
    },
    {
        path: 'screenshot',
        component: ScreenshotComponent
    },
    {
        path: 'wrap',
        component: WrapComponent
    },
    {
        path: 'each',
        component: EachComponent
    },
    {
        path: 'its',
        component: ItsComponent
    },
    {
        path: 'invoke',
        component: InvokeComponent
    },
    {
        path: 'spread',
        component: SpreadComponent
    },
    {
        path: 'then',
        component: ThenComponent
    },
    {
        path: 'as',
        component: AsComponent
    },
    {
        path: 'wait',
        component: WaitComponent
    },
    {
        path: 'request',
        component: RequestComponent
    },
    {
        path: 'intercept',
        component: InterceptComponent
    },
    {
        path: 'fixture',
        component: FixtureComponent
    },
    {
        path: 'read-file',
        component: ReadFileComponent
    },
    {
        path: 'write-file',
        component: WriteFileComponent
    },
    {
        path: 'clear-local-storage',
        component: ClearLocalStorageComponent
    },
    {
        path: 'get-all-local-storage',
        component: GetAllLocalStorageComponent
    },
    {
        path: 'clear-all-local-storage',
        component: ClearAllLocalStorageComponent
    },
    {
        path: 'get-all-session-storage',
        component: GetAllSessionStorageComponent
    },
    {
        path: 'clear-all-session-storage',
        component: ClearAllSessionStorageComponent
    },
    {
        path: 'get-cookie',
        component: GetCookieComponent
    },
    {
        path: 'get-cookies',
        component: GetCookiesComponent
    },
    {
        path: 'get-all-cookies',
        component: GetAllCookiesModule
    },
    {
        path: 'set-cookie',
        component: SetCookieComponent
    },
    {
        path: 'clear-cookie',
        component: ClearCookieComponent
    },
    {
        path: 'clear-cookies',
        component: ClearCookiesComponent
    },
    {
        path: 'clear-all-cookies',
        component: ClearAllCookiesComponent
    },
    {
        path: 'spy',
        component: SpyComponent
    },
    {
        path: 'stub',
        component: StubComponent
    },
    {
        path: 'clock',
        component: ClockComponent
    },
    {
        path: 'tick',
        component: TickComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CypressRoutingModule {}
