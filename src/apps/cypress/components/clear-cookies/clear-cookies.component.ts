import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-clear-cookies',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./clear-cookies.component.css']
})
export class ClearCookiesComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ClearCookies',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/clear-cookies',
                    name: 'clear-cookies.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
