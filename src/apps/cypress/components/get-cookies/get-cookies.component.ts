import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-get-cookies',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./get-cookies.component.css']
})
export class GetCookiesComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'GetCookies',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/get-cookies',
                    name: 'get-cookies.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
