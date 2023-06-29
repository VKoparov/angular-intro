import {NgModule} from '@angular/core';
import {CypressComponent} from './cypress.component';
import {CypressRoutingModule} from "./cypress-routing.module";
import {NavigationModule} from "../app/shared/navigation/navigation.module";
import {CommonModule} from "@angular/common";
import {BaseModule} from "../app/common/base/base.module";
import {THEME_CONFIG} from "../app/models/theme";
import {CYPRESS_THEME} from "./theme/cypress-theme";
import {GetModule} from "./components/get/get.module";
import {ContainsModule} from "./components/contains/contains.module";
import {WithinModule} from "./components/within/within.module";
import {RootModule} from "./components/root/root.module";
import {ChildrenModule} from "./components/children/children.module";
import {ClosestModule} from "./components/closest/closest.module";
import { NextAllComponent } from './components/next-all/next-all.component';
import { NextUntilComponent } from './components/next-until/next-until.component';
import {EqModule} from "./components/eq/eq.module";
import {FilterModule} from "./components/filter/filter.module";
import {FindModule} from "./components/find/find.module";
import {FirstModule} from "./components/first/first.module";
import {LastModule} from "./components/last/last.module";
import {NextModule} from "./components/next/next.module";
import {NextAllModule} from "./components/next-all/next-all.module";
import {NextUntilModule} from "./components/next-until/next-until.module";
import { ParentsUntilComponent } from './components/parents-until/parents-until.component';
import { PrevAllComponent } from './components/prev-all/prev-all.component';
import { PrevUntilComponent } from './components/prev-until/prev-until.component';
import {NotModule} from "./components/not/not.module";
import {ParentModule} from "./components/parent/parent.module";
import {ParentsModule} from "./components/parents/parents.module";
import {ParentsUntilModule} from "./components/parents-until/parents-until.module";
import {PrevModule} from "./components/prev/prev.module";
import {PrevAllModule} from "./components/prev-all/prev-all.module";
import {PrevUntilModule} from "./components/prev-until/prev-until.module";
import {SiblingsModule} from "./components/siblings/siblings.module";
import {TypeModule} from "./components/type/type.module";
import {FocusModule} from "./components/focus/focus.module";
import {BlurModule} from "./components/blur/blur.module";
import {ClearModule} from "./components/clear/clear.module";
import {SubmitModule} from "./components/submit/submit.module";
import {ClickModule} from "./components/click/click.module";
import {DblclickModule} from "./components/dblclick/dblclick.module";
import {RightclickModule} from "./components/rightclick/rightclick.module";
import {CheckModule} from "./components/check/check.module";
import {UncheckModule} from "./components/uncheck/uncheck.module";
import {SelectModule} from "./components/select/select.module";
import {ScrollIntoViewModule} from "./components/scroll-into-view/scroll-into-view.module";
import {ScrollToModule} from "./components/scroll-to/scroll-to.module";
import {TriggerModule} from "./components/trigger/trigger.module";
import {WindowModule} from "./components/window/window.module";
import {DocumentModule} from "./components/document/document.module";
import {TitleModule} from "./components/title/title.module";
import {ViewportModule} from "./components/viewport/viewport.module";
import {HashModule} from "./components/hash/hash.module";
import {LocationModule} from "./components/location/location.module";
import {UrlModule} from "./components/url/url.module";
import {GoModule} from "./components/go/go.module";
import {ReloadModule} from "./components/reload/reload.module";
import {VisitModule} from "./components/visit/visit.module";
import {ShouldModule} from "./components/should/should.module";
import {AndModule} from "./components/and/and.module";
import {ExpectModule} from "./components/expect/expect.module";
import {AssertModule} from "./components/assert/assert.module";
import {ShouldCallbackModule} from "./components/should-callback/should-callback.module";
import {EndModule} from "./components/end/end.module";
import {ExecModule} from "./components/exec/exec.module";
import {FocusedModule} from "./components/focused/focused.module";
import {ScreenshotModule} from "./components/screenshot/screenshot.module";
import {WrapModule} from "./components/wrap/wrap.module";
import {EachModule} from "./components/each/each.module";
import {ItsModule} from "./components/its/its.module";
import {InvokeModule} from "./components/invoke/invoke.module";
import {SpreadModule} from "./components/spread/spread.module";
import {ThenModule} from "./components/then/then.module";
import {AsModule} from "./components/as/as.module";
import {WaitModule} from "./components/wait/wait.module";
import {RequestModule} from "./components/request/request.module";
import {InterceptModule} from "./components/intercept/intercept.module";
import {FixtureModule} from "./components/fixture/fixture.module";
import {ReadFileModule} from "./components/read-file/read-file.module";
import {WriteFileModule} from "./components/write-file/write-file.module";
import {ClearLocalStorageModule} from "./components/clear-local-storage/clear-local-storage.module";
import {GetAllLocalStorageModule} from "./components/get-all-local-storage/get-all-local-storage.module";
import {ClearAllLocalStorageModule} from "./components/clear-all-local-storage/clear-all-local-storage.module";
import {GetAllSessionStorageModule} from "./components/get-all-session-storage/get-all-session-storage.module";
import {ClearAllSessionStorageModule} from "./components/clear-all-session-storage/clear-all-session-storage.module";
import {GetCookieModule} from "./components/get-cookie/get-cookie.module";
import {GetCookiesModule} from "./components/get-cookies/get-cookies.module";
import {GetAllCookiesModule} from "./components/get-all-cookies/get-all-cookies.module";
import {SetCookieModule} from "./components/set-cookie/set-cookie.module";
import {ClearCookieModule} from "./components/clear-cookie/clear-cookie.module";
import {ClearCookiesModule} from "./components/clear-cookies/clear-cookies.module";
import {ClearAllCookiesModule} from "./components/clear-all-cookies/clear-all-cookies.module";
import {SpyModule} from "./components/spy/spy.module";
import {StubModule} from "./components/stub/stub.module";
import {ClockModule} from "./components/clock/clock.module";
import {TickModule} from "./components/tick/tick.module";

@NgModule({
    declarations: [
        CypressComponent
    ],
    imports: [
        CommonModule,
        BaseModule,
        NavigationModule,
        CypressRoutingModule,
        GetModule,
        ContainsModule,
        WithinModule,
        RootModule,
        ChildrenModule,
        ClosestModule,
        EqModule,
        FilterModule,
        FindModule,
        FirstModule,
        LastModule,
        NextModule,
        NextAllModule,
        NextUntilModule,
        NotModule,
        ParentModule,
        ParentsModule,
        ParentsUntilModule,
        PrevModule,
        PrevAllModule,
        PrevUntilModule,
        SiblingsModule,
        TypeModule,
        FocusModule,
        BlurModule,
        ClearModule,
        SubmitModule,
        ClickModule,
        DblclickModule,
        RightclickModule,
        CheckModule,
        UncheckModule,
        SelectModule,
        ScrollIntoViewModule,
        ScrollToModule,
        TriggerModule,
        WindowModule,
        DocumentModule,
        TitleModule,
        ViewportModule,
        HashModule,
        LocationModule,
        UrlModule,
        GoModule,
        ReloadModule,
        VisitModule,
        ShouldModule,
        AndModule,
        ExpectModule,
        AssertModule,
        ShouldCallbackModule,
        EndModule,
        ExecModule,
        FocusedModule,
        ScreenshotModule,
        WrapModule,
        EachModule,
        ItsModule,
        InvokeModule,
        SpreadModule,
        ThenModule,
        AsModule,
        WaitModule,
        RequestModule,
        InterceptModule,
        FixtureModule,
        ReadFileModule,
        WriteFileModule,
        ClearLocalStorageModule,
        GetAllLocalStorageModule,
        ClearAllLocalStorageModule,
        GetAllSessionStorageModule,
        ClearAllSessionStorageModule,
        GetCookieModule,
        GetCookiesModule,
        GetAllCookiesModule,
        SetCookieModule,
        ClearCookieModule,
        ClearCookiesModule,
        ClearAllCookiesModule,
        SpyModule,
        StubModule,
        ClockModule,
        TickModule
    ],
    providers: [
        { provide: THEME_CONFIG, useValue: CYPRESS_THEME }
    ]
})
export class CypressModule {}
