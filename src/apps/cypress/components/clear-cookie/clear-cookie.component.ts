import { Component } from '@angular/core';
import {BaseComponent} from "../../../app/common/base/base.component";
import {HttpClient} from "@angular/common/http";
import {FileSettings} from "../../const/files-settings";

@Component({
    selector: 'app-clear-cookie',
    templateUrl: '../../../app/common/base/base.component.html',
    styleUrls: ['./clear-cookie.component.css']
})
export class ClearCookieComponent extends BaseComponent {

    constructor(public override httpClient: HttpClient) {
        super(
            httpClient,
            'ClearCookie',
            FileSettings.URL_PATH,
            [
                {
                    location: 'components/clear-cookie',
                    name: 'clear-cookie.component.cy.ts',
                    discriminatorType: ''
                }
            ]
        );
    }
}
