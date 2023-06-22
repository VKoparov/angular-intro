import {Component} from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {GuardExampleComponent} from "./example/component/guard-example.component";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-guard-check-load',
    templateUrl: './guard-check-load.component.html',
    styleUrls: ['./guard-check-load.component.css']
})
export class GuardCheckLoadComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'Guard',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/guard-check-load/example/guard',
                    name: 'example.guard.ts',
                    discriminatorType: '@Injectable'
                },
                {
                    location: 'components/guard-check-load/example',
                    name: 'guard-example-routing.module.ts',
                    discriminatorType: 'const'
                },
                {
                    location: 'components/guard-check-load/example',
                    name: 'guard-example.module.ts',
                    discriminatorType: '@NgModule'
                }
            ],
            GuardExampleComponent
        );
    }
}
