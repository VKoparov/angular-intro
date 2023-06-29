import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-get-all-cookies',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./get-all-cookies.component.css']
})
export class GetAllCookiesComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'GetAllCookies',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/get-all-cookies',
                    name: 'get-all-cookies.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
