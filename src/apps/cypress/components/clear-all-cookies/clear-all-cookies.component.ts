import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-clear-all-cookies',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./clear-all-cookies.component.css']
})
export class ClearAllCookiesComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ClearAllCookies',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/clear-all-cookies',
                    name: 'clear-all-cookies.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
