import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-get-cookie',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./get-cookie.component.css']
})
export class GetCookieComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'GetCookie',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/get-cookie',
                    name: 'get-cookie.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
